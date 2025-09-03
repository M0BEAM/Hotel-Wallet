const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const RS_Schema = new mongoose.Schema({
    nom:{
        type:String,
        require:true,
    },
    cin:{
        type:String,
        require:true,
        unique:true
    },
    tel:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
      service : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "service"
    },
    hotel : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hotel"
    }
}, { timestamps: true })

RS_Schema.pre("save",async function(next){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    next()
   })

   RS_Schema.pre("findOneAndUpdate",async function(next){
    const update = this.getUpdate()
    if(!update)
    return next()
    const salt = await bcrypt.genSalt(10)
    update.password = await bcrypt.hash(update.password,salt)
    next()
   })

module.exports = mongoose.model("responsable",RS_Schema)