const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    prix:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    quantite:{
        type:Number,
        required:true
    },
    service : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "service"
    }
}, { timestamps: true })

module.exports = mongoose.model("produit",produitSchema);