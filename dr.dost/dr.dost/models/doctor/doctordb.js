const mongoose = require("mongoose")

const doctorSchema=mongoose.Schema({
    eamil:String,
    password: String,
    UserDetail:[{
        type: mongoose.Schema.types.ObjectId,
        ref:"doctordetail"
    }]
})

module.exports=mongoose.model("doctordb", doctorSchema)
