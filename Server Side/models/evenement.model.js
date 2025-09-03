const mongoose = require("mongoose")

const evenementSchema = new mongoose.Schema({
    nom : {
        type: String,
    },
    responsable : {
     type: String,
    },
    description : {
        type: String,
    },
    date:{
     type:Date,
    },
    image:{
      type:String,
    },
    hotel : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hotel"
    }
}, { timestamps: true })

module.exports = mongoose.model("evenement",evenementSchema)