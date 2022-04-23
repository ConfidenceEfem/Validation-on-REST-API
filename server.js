const express = require("express")
const mongoose = require("mongoose")
const port = 2000
const router = require("./router")

const app = express()

app.use(express.json())

const url = "mongodb://localhost/Validation"
mongoose.connect(url).then(()=>{
    console.log("Connected successfully to Validation App")
})

app.get("/", (req,res)=>{
    res.send("Getting Validation App")
})

app.use("/", router)

app.listen(port,()=>{
    console.log("Listening to port",port)
})