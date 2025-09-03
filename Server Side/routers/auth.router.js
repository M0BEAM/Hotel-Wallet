const router = require("express").Router()
const {protect} = require("../middeleware/protect")
const {private} = require("../middeleware/private")

router.route("/authClient").get(protect,private)

module.exports = router