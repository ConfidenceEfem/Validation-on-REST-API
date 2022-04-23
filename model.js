const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    name:{
        type: String, 
        required: true,
    },
    institution:{
        type: String,
        required: true
    },
    course:{
        type: String, 
        required: true
    }
})

module.exports = mongoose.model("model", Schema)