const jwt = require("jsonwebtoken")
const Client = require("../models/client.model")
const Admin = require("../models/admin.model")
const RS = require("../models/RS.model")
const Service = require("../models/service.model")
module.exports.protect = async (req, res, next) => {

  let token;
  try {
    if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer"))
      return res.status(400).json({ success: false, msg: "you're not authorized !!" })
    token = req.headers.authorization.split(" ")[1]
    if (!token)
      return res.status(400).json({ success: false, msg: "token not found !!" })
      
    const decoded = jwt.verify(token, "fdgdfgsgfdgsg")

    const client = await Client.findById(decoded.id)
    //const admin = await Admin.findById(decoded.id).select("-password") without password
    const admin = await Admin.findById(decoded.id)
    const rs = await RS.findById(decoded.id)
    if (client)
      req.person = { client, role: "client" }
    if (admin)
      req.person = { admin, role: "admin" }
    if (rs){
      const service = await Service.findById(rs.service)
      rs.service = service
      req.person = { rs, role: "RS" }
    }
    next()
  } catch (error) {
    return res.status(400).json({ success: false, ErrorMsg: error })
  }

}