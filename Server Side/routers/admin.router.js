const router = require("express").Router()
const {valideClient,getAdminById,modiferAdminProfile, ajouterSolde, ajouterChambre,ajouterAdmin,loginAdmin} = require("../controllers/admin.controller")

router.route("/valideClient/:idClient").put(valideClient)
router.route("/ajouterSolde/:idClient").put(ajouterSolde)
router.route("/ajouterChambre/:idClient").put(ajouterChambre)
router.route("/ajouterAdmin").post(ajouterAdmin)
router.route("/loginAdmin").post(loginAdmin)
router.route("/modiferAdminProfile/:idAdmin").put(modiferAdminProfile)
router.route("/getAdminById/:adminId").get(getAdminById)
module.exports = router