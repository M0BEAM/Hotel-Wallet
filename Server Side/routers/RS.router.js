const router = require("express").Router()
const {ajouterRS,modiferProfile,deleteRs,modiferRs, loginRS, valideCommande, getRS} = require("../controllers/RS.controller")

router.route("/ajouterRS").post(ajouterRS)
router.route("/loginRS").post(loginRS)
router.route("/getRs").get(getRS)
router.route("/valideCommande/:idCommande").put(valideCommande)
router.route("/modiferRs/:idRs").put(modiferRs)
router.route("/modiferProfile/:idRs").put(modiferProfile)
router.route("/deleteRs/:idRs").delete(deleteRs)
module.exports = router