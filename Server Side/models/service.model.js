const mongoose = require("mongoose")
const produit = require("./produit.model")
const serviceSchema = new mongoose.Schema({

    nom : {
        type:String,
        require:true
    },
    type : {
        type:String,
        require:true
    },
    img : {
        type:String,
        require:true
    },
    nbrTable : {
        type : Number,
        require : true
    },
    hotel : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hotel"
    }

}, { timestamps: true })


module.exports = mongoose.model("service",serviceSchema)