const mongoose = require("mongoose")

const hotelSchema = new mongoose.Schema({
   name:{
    type:String,
    require:true
   },
   location:{
    type:String,
    require:true
   }
   ,
   admin : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin"
    }
})

module.exports = mongoose.model("hotel",hotelSchema)

