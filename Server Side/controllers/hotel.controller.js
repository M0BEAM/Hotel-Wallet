const Hotel = require("../models/hotel.model")

module.exports.ajouterHotel = async(req,res) => {
    const {name ,location, admin} = req.body
    try {
        if(!name || !location || !admin)
             return res.status(400).json({success:false,msg:"missing something"})
             
        const hotel = await Hotel.create({name ,location, admin})
        if(!hotel)
        return res.status(400).json({success:false,msg:"data not saving"})
        res.status(200).json({
            success:true,
            hotel
        })
      
    } catch (error) {
        return res.status(400).json({success:false,errorMsg:error.message})
    }
}