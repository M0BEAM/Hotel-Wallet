const mongoose = require("mongoose")
const DB_URI = process.env.DB_URI || "mongodb+srv://mourad2:123@cluster0.l7gbpv5.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
mongoose.connect(DB_URI)
mongoose.connection.on("connected",()=>{
    console.log("mongoose running")
})
mongoose.connection.on("error",(err)=>{
console.log(err)        
})

module.exports = mongoose