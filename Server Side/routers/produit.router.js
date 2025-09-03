const router = require("express").Router();
const {ajouterProduit,updateStockByIdProduit,getProduitByServiceName,updateProduit,deleteProduit,getProduit,findProduitById} = require("../controllers/produit.controller")
const {upload} = require("../config/upload")
const upl = upload()
router.post("/ajouterProduit",upl.single("image"),ajouterProduit)
router.get("/getProduit",getProduit)
router.put("/updateProduit/:produitId",updateProduit)
router.put("/updateStockByIdProduit/:produitId",updateStockByIdProduit)
router.delete("/deleteProduit/:produitId",deleteProduit)
router.get("/findProduitById/:produitId",findProduitById)
router.get("/getProduitByServiceName/:nom",getProduitByServiceName)
module.exports = router;