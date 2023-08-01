const mongoose=require("mongoose");

const userModel=mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    leave:{
        type:String,
        required:false ,
        default:""
    }
}, { timestamps: true });

module.exports=mongoose.model("userlistdata",userModel)