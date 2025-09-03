const router = require("express").Router()
const {ajouterCommande,updateStatus,getCommande,getCommandebyId,getCommandebyIdClient} = require("../controllers/commande.controller")

router.route("/ajouterCommande").post(ajouterCommande)
router.route("/getCommande").get(getCommande)
router.route("/updateStatus/:idCommande").put(updateStatus)
router.route("/getCommandebyIdClient/:idClient").get(getCommandebyIdClient)
router.route("/getCommandebyId/:idClient").get(getCommandebyId)

module.exports = router
