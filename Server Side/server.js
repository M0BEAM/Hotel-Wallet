require("./config/db")
const express = require("express")
const routerRS = require("./routers/RS.router")
const routerService = require("./routers/service.router")
const routerClient = require("./routers/client.router")
const routerCommande = require("./routers/commande.router")
const authRouter = require("./routers/auth.router")
const routerAdmin = require("./routers/admin.router")
const routerProduit = require("./routers/produit.router")
const routerEvenement = require("./routers/evenement.router")
const routerHotel = require("./routers/hotel.router")
const app = express()

const cors = require("cors")


const PORT = process.env.PORT || 3001

// Add the following middleware to allow CORS requests
app.use(
    cors({
    origin: "http://localhost:3000"
}))
const server = require("http").createServer(app)

app.use(express.json())
app.use('/uploads', express.static('uploads'));
app.use("/api",authRouter)
app.use("/api",routerRS)
app.use("/api",routerService)
app.use("/api",routerClient)
app.use("/api",routerCommande)
app.use("/api",routerAdmin)
app.use("/api",routerProduit)
app.use("/api",routerEvenement)
app.use("/api",routerHotel)

server.listen(PORT,()=>{
    console.log("server is running at port: "+PORT)
})