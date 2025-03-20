const mongoose = require('mongoose')

const UserdetailSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.objectId,
        ref:"doctordb",
        required:true
    },
   name:{
    type:String,
    required:true
   },
   Email:{
    type:String,
    required:true
   },
  phone:{
    type:String,
    required:true
  },
  Specialization:{
    type:String,
    required:true
  },
  licno:{
    type:String,
    required:true
  },
  yrsofexp:{
    type:String,
    required:true
  },
  hospitalN:{
         type:String,
         requried:true
  },

  password:{
    type:String,
    requried:true
  },
  confirmpassword:{
    type:String,
    requried:true
  },

})

module

