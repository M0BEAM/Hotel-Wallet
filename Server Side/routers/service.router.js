const router = require("express").Router()
const {ajouterService,getServiceByNom,getServiceById,updateService,deleteService,getService} = require("../controllers/service.controller")
const multer = require('multer');
const path = require('path');
const {upload} = require("../config/upload")
const upl = upload()
  
router.post("/ajouterService",upl.single('image'),ajouterService)
router.route("/getService").get(getService)
router.route("/getServiceById/:idService").get(getServiceById)
router.route("/getServiceByNom/:nomService").get(getServiceByNom)
router.put("/updateService/:id",upl.single('image'),updateService)
router.route("/deleteService/:id").delete(deleteService)
//router.route("/updateRS/:id").put(valideCommande)

module.exports = router