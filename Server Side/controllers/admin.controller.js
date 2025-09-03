const Admin = require("../models/admin.model")
const Client = require("../models/client.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

module.exports.ajouterAdmin = async(req,res) => {
    const {email ,nom, password} = req.body
    try {
        if(!email || !password || !nom)
             return res.status(400).json({success:false,msg:"missing something"})
             
        const admin = await Admin.create({email ,nom, password})
        if(!admin)
        return res.status(400).json({success:false,msg:"data not saving"})
        res.status(200).json({
            success:true,
            token:generateToken({id:admin._id}), 
            //code:await cryptCode(code)
        })
      
    } catch (error) {
        return res.status(400).json({success:false,errorMsg:error.message})
    }
}
module.exports.loginAdmin = async(req,res) => {
    const {email , password} = req.body
    try {
        if(!email || !password)
             return res.status(400).json({success:false,msg:"missing something"})
        const admin = await Admin.findOne({email})
        if(!admin)
        return res.status(400).json({success:false,msg:"admin not found"})
        const decoded = await bcrypt.compare(password,admin.password)
        if(!decoded)
        return res.status(400).json({success:false,msg:"password failed"})
        res.status(200).json({
            success:true,
            token:generateToken({id:admin._id}), 
            //code:await cryptCode(code)
        })
      
    } catch (error) {
        return res.status(400).json({success:false,errorMsg:error.message})
    }
}

module.exports.modiferAdminProfile = async (req, res) => {
    const { idAdmin } = req.params
    const { nom,email,password } = req.body

    try {
        console.log(nom,email,password)
        if (!nom || !email || !password)
            return res.status(400).json({ success: false, msg: "field is empty !! " })
       
        const admin = await Admin.findByIdAndUpdate(idAdmin,{ nom, email, password },{ new: true })
        if (!admin)
            return res.status(400).json({ success: false, msg: "admin not updated" })
        res.status(200).json({
            success: true,
            msg: "updated successfully"
        })
    } catch (error) {
        return res.status(400).json({ success: false, msg: error.message })
    }
}

module.exports.valideClient = async (req,res)=>{

    const {idClient} = req.params

    try {
        if(!idClient)
        return res.status(400).json({success:false,msg:"id failed !! "})

        const valide = await Client.findByIdAndUpdate(idClient,{validation:true})
        if(!valide)
        return res.status(400).json({success:false,msg:"client not valide"})
        res.status(200).json({
            success:true,
            msg:"valide successfully"
        })
    } catch (error) {
        return res.status(400).json({success:false,msg:error.message})  
    }
} 

module.exports.ajouterSolde = async (req,res)=>{

    const {idClient} = req.params
    const {solde} = req.body
    try {
        
        if(!idClient)
        return res.status(400).json({success:false,msg:"id failed !! "})

        const valide = await Client.findByIdAndUpdate(idClient,{solde})
        if(!valide)
        return res.status(400).json({success:false,msg:"sold not updated"})
        res.status(200).json({
            success:true,
            msg:"success"
        })
    } catch (error) {
        return res.status(400).json({success:false,msg:error.message})  
    }
} 

module.exports.ajouterChambre = async (req,res)=>{

    const {idClient} = req.params
    const {numChambre} = req.body
    try {
        
        if(!idClient)
        return res.status(400).json({success:false,msg:"id failed !! "})

        const valide = await Client.findByIdAndUpdate(idClient,{numChambre})
        if(!valide)
        return res.status(400).json({success:false,msg:"Chambre not updated"})
        res.status(200).json({
            success:true,
            msg:"success"
        })
    } catch (error) {
        return res.status(400).json({success:false,msg:error.message})  
    }
} 

module.exports.getAdminById = async(req,res) => {
    const {adminId} = req.params
    try {
        if(!adminId)
             return res.status(400).json({success:false,msg:"missing id"})
        const admin = await Admin.findById(adminId)
        if(!admin)
        return res.status(400).json({success:false,msg:"admin not found"})
        res.status(200).json({
            success:true,
            admin
        })
      
    } catch (error) {
        return res.status(400).json({success:false,errorMsg:error.message})
    }
}

const generateToken = (admin) =>{return jwt.sign(admin ,"fdgdfgsgfdgsg")}