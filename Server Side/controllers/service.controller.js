const Service = require("../models/service.model")
const Produit = require("../models/produit.model")
const Rs = require("../models/RS.model")

module.exports.ajouterService = async (req, res) => {

    try {
        // Create a new product document in the database
        const newService = new Service({
            nom: req.body.nom,
            type: req.body.type,
            img: req.file.filename,
            admin:req.body.admin,
            nbrTable:req.body.nbrTable
        });

        // Save the product document to the database
        const result = await newService.save();
        console.log(result);
        res.status(201).json({ msg: 'Service: "'+req.body.nom+'" a ete ajouter avec succée' });
    } catch (error) {
        console.error('Error uploading product:', error);
        res.status(500).json({ msg: 'Error ! Il y a une ou plusieur champ vide ...' });
    }
}

module.exports.updateService = async (req, res) => {
    const { id } = req.params

    try {
        const newService = new Service({
            nom: req.body.nom,
            type: req.body.type,
            img: req.file.filename,
           
        });
      
        const service = await Service.findByIdAndUpdate(id,{nom:newService.nom,type:newService.type,img:newService.img})
        if (!service)
            return res.status(400).json({ success: false, msg: "data not updated" })
        res.status(200).json({
            success: true,
            service
        })
    } catch (error) {
        return res.status(400).json({ success: false, msg: error.message })
    }
}

module.exports.getService = async (req, res) => {

    try {

        const service = await Service.find().populate("admin")
        if (!service)
            return res.status(400).json({ success: false, msg: "data not found" })
        res.status(200).json({
            success: true,
            service
        })
    } catch (error) {
        return res.status(400).json({ success: false, msg: error })
    }
}

module.exports.getServiceByNom = async (req, res) => {
        const   {nomService} = req.params
    try {

        const service = await Service.find({nom:nomService})
        if (!service)
            return res.status(400).json({ success: false, msg: "data not found" })
        res.status(200).json({
            success: true,
            service
        })
    } catch (error) {
        return res.status(400).json({ success: false, msg: error })
    }
}

module.exports.getServiceById = async (req, res) => {
    const { idService } = req.params
    try {

        const service = await Service.findById(idService)
        if (!service)
            return res.status(400).json({ success: false, msg: "id or service not found" })

        res.status(200).json({
            success: true,
            service
        })
    } catch (error) {
        return res.status(400).json({ success: false, msg: error })
    }
}



module.exports.deleteService = async (req, res) => {

    const { id } = req.params

    try {

        const service = await Service.findByIdAndDelete(id)
        //delete all products enrolled with this service by id
        const produit = await Produit.deleteMany({ service: id });
        const rs = await Rs.updateMany({ service: id }, { service: null })
        if (!service || !produit)
            return res.status(400).json({ success: false, msg: "data not deleted" })
        res.status(200).json({
            success: true,
            service,
            produit
        })
    } catch (error) {
        return res.status(400).json({ success: false, msg: error })
    }
}
