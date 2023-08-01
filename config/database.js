const mongoose=require("mongoose");

const DatabaseConnection=()=>{
  return  mongoose.connect("database url").then(()=>{
        console.log("connection success");
    }).catch(()=>{
        console.log("connection Failed");
    })
};

module.exports=DatabaseConnection;