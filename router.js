const express = require("express")
const router = express.Router()
const model = require("./model")
const {validateSchema} = require("./validateMe")

router.post("/", async (req,res)=>{
    try {
       
        const {error} = validateSchema(req.body)
        if(error){
            res.status(404).json({message: error})
        }else{
            const {name,institution,course} = req.body
        const createModel = await model.create({name,institution,course})
        res.status(201).json({message: "Created successfully", data: createModel})
        }
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

router.get("/get", async (req,res)=>{
    try {
        const getAll = await model.find()
        res.status(201).json({message: "Get All Datas successfully", data: getAll})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

router.get("/:id", async (req,res)=>{
    try {
        const id = req.params.id
        const getOne = await model.findById(id)
        res.status(201).json({message: "Get One Data successfully", data: getOne})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

router.patch("/:id", async (req,res)=>{
    try {
        const id = req.params.id
        const {name,institution,course} = req.body
        const updateModel = await model.findByIdAndUpdate(id, {name,institution,course}, {new: true})
        res.status(201).json({message: "Updated Data successfully", data: updateModel})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

router.delete("/:id", async (req,res)=>{
    try {
        const id = req.params.id
        const deleteModel = await model.findByIdAndDelete(id)
         res.status(201).json({message: "Deleted Data successfully", data: deleteModel})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})


module.exports = router