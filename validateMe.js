const joi = require("@hapi/joi")

const validateModel = (data)=>{
    const modelData = joi.object({
        name: joi.string().required().min(3).max(35),
        institution: joi.required(),
        course: joi.required(),
    })
    return modelData.validate(data)
}


const validateSchema = (data)=>{
    const validateShape = joi.object({
        name: joi.string().required("This is field, name is compulsory").min(5),
        institution: joi.string().required("Please input your institution"),
        course: joi.string().required(),
    })
    return validateShape.validate(data)
}



module.exports = {
    validateSchema
}