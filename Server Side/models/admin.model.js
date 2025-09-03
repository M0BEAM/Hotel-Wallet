const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const adminSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    nom:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

adminSchema.pre("save",async function(){
 const salt = await bcrypt.genSalt(10)
 this.password = await bcrypt.hash(this.password,salt)
})

module.exports = mongoose.model("admin",adminSchema,"myCollection")

