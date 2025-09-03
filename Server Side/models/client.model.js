const mongoose = require("mongoose")
const moment = require("moment")

const clientSchema = new mongoose.Schema({
    cin: {
        type: Number,
        require: true,
        unique: true
    },
    nom: {
        type: String,
        require: true
    },
    prenom: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    nbrPersonne: {
        type: Number,
        require: true
    },
    tel: {
        type: String,
        require: true
    },
    nbrJour: {
        type: Number,
        require: true
    },
    rep: {
        type: String,
        require: true
    },
    pays: {
        type: String,
        require: true
    },
    date_arrive: {
        type: Date,
        default: Date.now()
    },

    date_sortie: {
        type: Date,
        default: Date.now()
    },
    solde: {
        type: Number
    },
    numChambre: {
        type: Number
    },
    status: {
        type: Boolean,
        default: false
    },

    block: {
        type: Boolean,
        default: false
    },
    hotel : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hotel"
    },
    validatedAt: {
        type: Date,
        default: null
    }
}, { timestamps: true })

clientSchema.pre('save', function () {
    this.date_arrive = moment().add(1, "h")
    this.date_sortie = moment().add(this.nbrJour, "d").add(1, "h")
})

module.exports = mongoose.model("client", clientSchema)

