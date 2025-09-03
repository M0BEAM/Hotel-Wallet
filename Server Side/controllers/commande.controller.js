const Commande = require("../models/commande.model")


module.exports.ajouterCommande = async (req,res)=>{
    const { com = [],num_Table,total} = req.body;

    try {
        //console.log(com);
        const comModel = new Commande({
            com,num_Table,total
        })
        const commande = await comModel.save()
        if(!commande)
        return res.status(400).json({success:false,msg:"commande not saved"})
        res.status(200).json({
            success:true,
            msg:"saved successfully",
            commande
        })
    } catch (error) {
        return res.status(400).json({success:false,msg:error.message})  
    }
} 

module.exports.getCommande = async (req,res)=>{

    try {

        const commande = await Commande.find().populate("com.produit").populate("com.client").populate("com.service")
        
        if(!commande)
        return res.status(400).json({success:false,msg:"commande not found"})
        res.status(200).json({
            success:true,
            commande
        })
    } catch (error) {
        return res.status(400).json({success:false,msg:error})  
    }
} 
module.exports.getCommandebyId = async (req,res)=>{
    
    const {idClient}=req.params

    try {

        const commande = await Commande.findById(idClient).populate('produit').populate("client")
        if(!commande)
        return res.status(400).json({success:false,msg:"client not found"})
        res.status(200).json({
            success:true,
            commande
        })
    } catch (error) {
        return res.status(400).json({success:false,msg:error})  
    }
} 

module.exports.updateStatus = async (req,res)=>{
    
    const {idCommande}=req.params

    try {
        console.log(idCommande);
        const commande = await Commande.findByIdAndUpdate(idCommande,{status:true,dateValidation:Date.now()})
        if(!commande)
        return res.status(400).json({success:false,msg:"commande not found"})
        res.status(200).json({
            success:true,
            commande
        })
    } catch (error) {
        return res.status(400).json({success:false,msg:error})  
    }
} 

module.exports.getCommandebyIdClient = async (req,res)=>{
    
    const {idClient}=req.params
    try {

        const commande = await Commande.find({client:{$lte:idClient}}).populate('produit')
        if(!commande)
        return res.status(400).json({success:false,msg:"client not found"})
        res.status(200).json({
            success:true,
            commande
        })
    } catch (error) {
        return res.status(400).json({success:false,msg:error})  
    }
} 

