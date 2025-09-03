const router = require("express").Router()
const {getSolde,validateClient,blockClient,getClientByIdAndUpdate,getClientById,updateSolde,deleteClient,getClients,getDate, ajouterClient,codeVerification,updateSoldeAndChambre,loginClient} = require("../controllers/client.controller")


router.route("/ajouterClient").post(ajouterClient)
router.route("/loginClient").post(loginClient)
router.route("/getClients").get(getClients)
router.route("/getClientByIdAndUpdate/:idClient").put(getClientByIdAndUpdate)
router.route("/getClientById/:idClient").get(getClientById)
router.route("/getSolde/:idClient").get(getSolde)
router.route("/updateSolde/:idClient").put(updateSolde)
router.route("/getDate/:idClient").get(getDate)
router.route("/updateSoldeAndChambre/:idClient").put(updateSoldeAndChambre)
router.route("/validateClient/:idClient").put(validateClient)
router.route("/blockClient/:idClient").put(blockClient)
router.route("/deleteClient/:idClient").delete(deleteClient)
router.route("/codeVerification").post(codeVerification)

module.exports = router