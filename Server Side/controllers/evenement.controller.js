const Evenement = require("../models/evenement.model");


module.exports.ajouterEvenement = async (req, res) => {
    try {
        const newEvenement = new Evenement({
            nom: req.body.nom,
            responsable: req.body.responsable,
            description: req.body.description,
            date: req.body.date,
            admin: req.body.admin,
            image: req.file.filename,
        });

        const evenement = await newEvenement.save()

        if (!evenement)
            return res.status(400).json({ success: false, msg: 'Error ! Il y a une ou plusieur champ vide ...' })
        res.status(200).json({
            success: true,
            msg: 'Evenement: "'+req.body.nom+'" a ete ajouter avec succée'
        })
    } catch (error) {
        return res.status(400).json({ success: false,msg: 'Error ! Il y a une ou plusieur champ vide ...' })
    }
}
module.exports.getEvenement = async (req, res) => {

    try {
        const evenement = await Evenement.find().populate("admin")
        if (!evenement)
            return res.status(400).json({ success: false, msg: "data not found" })
        res.status(200).json({
            success: true,
            evenement
        })
    } catch (error) {
        return res.status(400).json({ success: false, msg: error })
    }
}
module.exports.deleteEvenement = async (req, res) => {
    try {
        let { idevent } = req.params;
        const evenement = await Evenement.findByIdAndDelete(idevent);
        if (!evenement)
            return res.status(400).json({ success: false, msg: "event not delete" })
        return res.status(200).json({
            success: true,
            message: "event deleted successfully."
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}