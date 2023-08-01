const express=require("express");
const { getAllUserList ,createUser,updateUserData,deleteUserData,applyForLeave} = require("../controllers/users");
const router=express.Router();

router.get("/allUserList",getAllUserList)
router.post("/createUser",createUser)
router.post("/updateUser",updateUserData)
router.post("/deleteUser",deleteUserData)
router.post("/applyForLeave",applyForLeave)

module.exports= router;