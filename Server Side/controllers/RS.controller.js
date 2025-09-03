const RS = require("../models/RS.model")
const Commande = require("../models/commande.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports.ajouterRS = async (req, res) => {
    const { nom, cin, tel, email, password, service,admin } = req.body
    try {
        if (!email || !password || !nom || !cin || !tel || !service || !admin)
            return res.status(400).json({ success: false, msg: "Error ! il y a une ou plusieur champ vide ..." })
        const rs = await RS.create({ nom, cin, tel, email, password, service, admin })
        if (!rs)
            return res.status(400).json({ success: false, msg: "data not saving" })
        res.status(200).json({
            success: true,
            //token:generateToken({id:rs._id}), 
            msg: 'Responsable: "'+req.body.nom+'" a ete ajouter avec succée'
            //code:await cryptCode(code)
        })

    } catch (error) {
        return res.status(400).json({ success: false, errorMsg: error.message })
    }
}

module.exports.getRS = async (req, res) => {
    try {
        
        const rs = await RS.find().populate("service").populate("admin")
        if (!rs)
            return res.status(400).json({ success: false, msg: "data not found" })
        res.status(200).json({
            success: true,
            rs
        })

    } catch (error) {
        return res.status(400).json({ success: false, errorMsg: error.message })
    }
}

module.exports.loginRS = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password)
            return res.status(400).json({ success: false, msg: "missing something" })
        const rs = await RS.findOne({ email })
        if (!rs)
            return res.status(400).json({ success: false, msg: "rs not found" })
        const decoded = await bcrypt.compare(password, rs.password)
        if (!decoded)
            return res.status(400).json({ success: false, msg: "password failed" })
        
        res.status(200).json({
            success: true,
            token: generateToken({ id: rs._id }),
            //code:await cryptCode(code)
        })

    } catch (error) {
        return res.status(400).json({ success: false, errorMsg: error.message })
    }
}

module.exports.valideCommande = async (req, res) => {

    const { idCommande } = req.params

    try {

        if (!idCommande)
            return res.status(400).json({ success: false, msg: "id failed !! " })

        const valide = await Commande.findByIdAndUpdate(idCommande, { validation: true })
        if (!valide)
            return res.status(400).json({ success: false, msg: "commande not valide" })
        res.status(200).json({
            success: true,
            msg: "valide successfully"
        })
    } catch (error) {
        return res.status(400).json({ success: false, msg: error.message })
    }
}

module.exports.modiferRs = async (req, res) => {
    const { idRs } = req.params
    const { tel, email, password ,service} = req.body

    try {

        if (!tel || !email || !password)
            return res.status(400).json({ success: false, msg: "field is empty !! " })

        const rs = await RS.findByIdAndUpdate(idRs,{ tel, email, password,service },{ new: true })
        if (!rs)
            return res.status(400).json({ success: false, msg: "rs not updated" })
        res.status(200).json({
            success: true,
            msg: "updated successfully"
        })
    } catch (error) {
        return res.status(400).json({ success: false, msg: error.message })
    }
}

module.exports.modiferProfile = async (req, res) => {
    const { idRs } = req.params
    const { tel, email, password } = req.body

    try {

        if (!tel || !email || !password)
            return res.status(400).json({ success: false, msg: "field is empty !! " })

        const rs = await RS.findByIdAndUpdate(idRs,{ tel, email, password },{ new: true })
        if (!rs)
            return res.status(400).json({ success: false, msg: "rs not updated" })
        res.status(200).json({
            success: true,
            msg: "updated successfully"
        })
    } catch (error) {
        return res.status(400).json({ success: false, msg: error.message })
    }
}

module.exports.deleteRs = async (req, res) => {
    const { idRs } = req.params

    try {

        const rs = await RS.findByIdAndDelete(idRs)
        if (!rs)
            return res.status(400).json({ success: false, msg: "rs not deleted" })
        res.status(200).json({
            success: true,
            msg: "deleted successfully"
        })
    } catch (error) {
        return res.status(400).json({ success: false, msg: error.message })
    }
}

const generateToken = (RS) => { return jwt.sign(RS, "fdgdfgsgfdgsg") }