const router = require("express").Router()
const {ajouterHotel} = require("../controllers/hotel.controller")

router.route("/ajouterHotel").post(ajouterHotel)

module.exports = router