const Produit = require("../models/produit.model");
const Service = require("../models/service.model");
module.exports.ajouterProduit = async (req,res) => {
    
    try {
        const newProduit= new Produit({
            name: req.body.name,
            prix: req.body.prix,
            description: req.body.description,
            quantite:req.body.quantite,
            image: req.file.filename,
            service: req.body.service,
        });
        // get body content
       const produit = await newProduit.save()
        if(!produit)
        return res.status(400).json({success:false,msg:"produit not valide"})
        res.status(200).json({
            success: true,
            msg:'Produit: "'+req.body.name+'" a été ajouter avec succée'
        })
    }catch(err) {
        console.log(err.message)
        return res.status(400).json({
            success:false,
            msg: 'Error ! Il y a une ou plusieur champ vide ...'
        })
    }
}
module.exports.getProduit = async (req,res) => {
    try {
        let produit = await Produit.find().populate("service");
        if(!produit)
        return res.status(400).json({success:false,msg:"produit not valide"})
        return res.status(200).json({
            success: true,
            produit
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.updateProduit = async (req,res) => {
    let {produitId} = req.params;
    let { name,prix,image } = req.body;
    try {
        let produit = await Produit.findByIdAndUpdate(produitId,{
                name,
                prix,
                image});
        if(!produit)
        return res.status(400).json({success:false,msg:"produit not valide"})
        return res.status(200).json({
            success: true,
            produit
        })

    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err.message
        })
    }
}
module.exports.updateStockByIdProduit = async (req,res) => {
    let {produitId} = req.params;
    let { quantite } = req.body;
    
    try {
        let produit = await Produit.findByIdAndUpdate(produitId,{
                quantite 
            });
        if(!produit)
        return res.status(400).json({success:false,msg:"produit not updated"})
        return res.status(200).json({
            success: true,
            produit
        })

    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err.message
        })
    }
}
module.exports.deleteProduit = async (req,res) => {
    try {
        let {produitId} = req.params;
        const produit = await Produit.findByIdAndDelete(produitId);
        if(!produit)
        return res.status(400).json({success:false,msg:"produit not delete"})
        return res.status(200).json({
            success: true,
            message: "produit deleted successfully."
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}

module.exports.findProduitById = async (req,res) => {
    try {
        let {produitId} = req.params;
        let produit = await Produit.findById(produitId).populate("service");
        if(!produit)
        return res.status(400).json({success:false,msg:"produit not valide"})
        return res.status(200).json({
            success: true,
            produit
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}

module.exports.getProduitByServiceName = async (req,res) => {
    const { nom } = req.params
    try {
        const service = await Service.findOne({nom})
        const produit = await Produit.find({ service: service._id }).populate('service');
        if(!produit || !service)
        return res.status(400).json({success:false,msg:"produit or service not found"})
        return res.status(200).json({
            success: true,
            produit
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}


 