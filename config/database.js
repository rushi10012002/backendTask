const mongoose=require("mongoose");

const DatabaseConnection=()=>{
  return  mongoose.connect("mongodb+srv://rushikesh:jI9GOUcjkL4lPHmX@cluster0.tgaao.mongodb.net/userList").then(()=>{
        console.log("connection success");
    }).catch(()=>{
        console.log("connection Failed");
    })
};

module.exports=DatabaseConnection;
