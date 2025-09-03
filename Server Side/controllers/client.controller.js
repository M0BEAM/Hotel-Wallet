const Client = require("../models/client.model")
const jwt = require("jsonwebtoken")
const { transporter } = require("../config/emailValidation")


const generateCode = () => {
    return Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10)
}
let code = ""

module.exports.ajouterClient = async (req, res) => {
    const { cin, nom, prenom, email, nbrJour, nbrPersonne, rep, tel, pays } = req.body
    code = generateCode()
    const mailOptions = {
        from: 'empty0948@gmail.com',
        to: email,
        subject: 'Mail Verification ',
        html: '<span style="text-align:center"><h1>Code Verification: </h1><h2>' + code + '</h2></span>'
    };
    try {
        if (!cin || !nom || !email || !nbrJour || !nbrPersonne || !prenom || !rep || !pays || !tel )
            return res.status(400).json({ success: false, msg: "missing something" })
        const client = await Client.create({ cin, nom, email, nbrJour, solde: 0, numChambre: null, rep, tel, pays, nbrPersonne, prenom  })
        if (!client)
            return res.status(400).json({ success: false, msg: "data not saving" })
        sendMail(mailOptions)
        res.status(200).json({
            success: true,
            token: generateToken({ id: client._id }),
            //code:await cryptCode(code)
        })

    } catch (error) {
        return res.status(400).json({ success: false, message: error.message })
        console.log(error.message)
    }
}

module.exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find().populate("admin")
        if (!clients)
            return res.status(400).json({ success: false, msg: "client not found" })
        res.status(200).json({
            success: true,
            clients
        })

    } catch (error) {
        return res.status(400).json({ success: false, errorMsg: error.message })
    }
}

module.exports.blockClient = async (req, res) => {
    const { idClient } = req.params
    try {
        const client = await Client.findByIdAndUpdate(idClient, { block:true})
        if (!client)
            return res.status(400).json({ success: false, msg: "id not found" })
        res.status(200).json({
            success: true,
            client
        })

    } catch (error) {
        return res.status(400).json({ success: false, errorMsg: error.message })
    }
}

module.exports.getClientByIdAndUpdate = async (req, res) => {
    const { idClient } = req.params
    const { nom, email } = req.body
    try {
        const client = await Client.findByIdAndUpdate(idClient, { nom, email })
        if (!client)
            return res.status(400).json({ success: false, msg: "id not found" })
        res.status(200).json({
            success: true,
            client
        })

    } catch (error) {
        return res.status(400).json({ success: false, errorMsg: error.message })
    }
}

module.exports.getClientById = async (req, res) => {
    const { idClient } = req.params
    try {
        const client = await Client.findById(idClient)
        if (!client)
            return res.status(400).json({ success: false, msg: "id not found" })
        res.status(200).json({
            success: true,
            client
        })

    } catch (error) {
        return res.status(400).json({ success: false, errorMsg: error.message })
    }
}

module.exports.loginClient = async (req, res) => {
    const { email } = req.body
    code = generateCode()
    const mailOptions = {
        from: 'empty0948@gmail.com',
        to: email,
        subject: 'Mail Verification ',
        html: '<span style="text-align:center"><h1>Code Verification: </h1><h2>' + code + '</h2></span>'
    };
    try {
        if (!email)
            return res.status(400).json({ success: false, msg: "missing something" })
        const client = await Client.findOne({ email })
        if (!client)
            return res.status(400).json({ success: false, msg: "data not saving" })
        sendMail(mailOptions)
        res.status(200).json({
            success: true,
            token: generateToken({ id: client._id }),
            //code:await cryptCode(code)
        })

    } catch (error) {
        return res.status(400).json({ success: false, errorMsg: error.message })
    }
}

module.exports.codeVerification = async (req, res) => {
    const { clientCode } = req.body

    try {
        if (!clientCode)
            return res.status(400).json({ success: false, msg: "clientCode is required !!" })
        const verif = clientCode === code;
        if (!verif)
            return res.status(400).json({ success: false, msg: "clientCode is false !!" })
        res.status(200).json({ success: true, msg: "clientCode is true !!" })
    } catch (error) {
        return res.status(400).json({ success: false, errorMsg: error.message })
    }


}

module.exports.getSolde = async (req, res) => {

    const { idClient } = req.params
    try {

        const client = await Client.findById(idClient)
        if (!client)
            return res.status(400).json({ success: false, msg: "client not found" })
        res.status(200).json({
            success: true,
            solde: client.solde
        })
    } catch (error) {
        return res.status(400).json({ success: false, msg: error })
    }
}

module.exports.validateClient = async (req, res) => {

    const { idClient } = req.params
    const {admin} = req.body
    try {

        const client = await Client.findByIdAndUpdate(idClient, { status:true,admin,validatedAt:Date.now() })
        if (!client)
            return res.status(400).json({ success: false, msg: "client not validate" })
        res.status(200).json({
            success: true,
            msg:"client valide success"
        })
    } catch (error) {
        return res.status(400).json({ success: false, msg: error })
    }
}

module.exports.updateSolde = async (req, res) => {

    const { idClient } = req.params
    const { solde } = req.body
    try {

        const client = await Client.findByIdAndUpdate(idClient, { solde })
        if (!client)
            return res.status(400).json({ success: false, msg: "client not updated" })
        res.status(200).json({
            success: true,
            solde: client.solde
        })
    } catch (error) {
        return res.status(400).json({ success: false, msg: error })
    }
}

module.exports.getDate = async (req, res) => {

    const { idClient } = req.params
    try {

        const client = await Client.findById(idClient)
        if (!client)
            return res.status(400).json({ success: false, msg: "client not found" })
        res.status(200).json({
            success: true,
            dateArrive: client.date_arrive,
            dateSortie: client.date_sortie
        })
    } catch (error) {
        return res.status(400).json({ success: false, msg: error.message })
    }

}

const generateToken = (client) => { return jwt.sign(client, "fdgdfgsgfdgsg") }



const sendMail = (mailOptions) => {
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports.updateSoldeAndChambre = async (req, res) => {
    const { solde, numChambre } = req.body
    const { idClient } = req.params

    try {

        const client = await Client.findByIdAndUpdate(idClient, { solde, numChambre })
        if (!client)
            return res.status(400).json({ success: false, msg: "solde and chambre not updating" })
        res.status(200).json({
            success: true,
            solde: client.solde,
            chambre: client.numChambre
        })
    } catch (error) {
        return res.status(400).json({ success: false, msg: error.message })
    }
}


module.exports.deleteClient = async (req, res) => {
    const { idClient } = req.params

    try {

        const client = await Client.findByIdAndDelete(idClient)
        if (!client)
            return res.status(400).json({ success: false, msg: "client ne pas supprimer" })
        res.status(200).json({
            success: true,
            client,
            msg: "client est supprimer"
        })
    } catch (error) {
        return res.status(400).json({ success: false, msg: error.message })
    }
}
