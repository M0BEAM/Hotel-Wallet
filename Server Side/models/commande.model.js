const mongoose = require("mongoose")

const commandeSchema = new mongoose.Schema({

  com: [{
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "client"
    },
    produit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "produit"
    },
    service: {    
      type: mongoose.Schema.Types.ObjectId,
      ref: "service"
    },
    quantite: {
      type: Number,
      require: true
    },
  }],
  num_Table: {
    type: Number,
  },
  total:{
    type: Number,
  },
  status: {
    type: Boolean,
    default: false
  },
  dateValidation: {
    type: Date,
    default: null
  },
  hotel : {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hotel"
  }

}, { timestamps: true })

module.exports = mongoose.model("commande", commandeSchema)