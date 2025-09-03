const router = require("express").Router();
const{ajouterEvenement,getEvenement, deleteEvenement} = require("../controllers/evenement.controller")
const {upload} = require("../config/upload")
const upl = upload()
router.route("/ajouterEvenement").post(upl.single("image"),ajouterEvenement)
router.route("/getEvenement").get(getEvenement)
router.route("/deleteEvenement/:idevent").delete(deleteEvenement)
module.exports = router;