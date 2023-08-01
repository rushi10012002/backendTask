

const user=require("../model/user")
exports.getAllUserList= async(req,res)=>{
try {
    console.log("userList called");
    const result =await user.find()
    return res.json({
        message:"user List",
        data:result
    })
} catch (error) {
    return res.json({
        message:error
    })
}
}

exports.createUser= async(req,res)=>{
    try {
        console.log("userList called");
        const result =await user.create(req.body)
        return res.json({
            message:"user created successfully",
            data:result
        })
    } catch (error) {
        return res.json({
            message:error
        })
    }
    }

    exports.updateUserData= async(req,res)=>{
        try {
            const result =await user.findByIdAndUpdate({_id:req.body._id},req.body,{new:true})
            return res.json({
                message:"user data updated",
                
            })
        } catch (error) {
            return res.json({
                message:error
            })
        }
        }
    exports.deleteUserData= async(req,res)=>{
        try {
            const result =await user.findByIdAndDelete(req.body._id)
            return res.json({
                message:"user data deleted",
                
            })
        } catch (error) {
            return res.json({
                message:error
            })
        }
        }
    exports.applyForLeave= async(req,res)=>{
        try {
            const result =await user.findByIdAndUpdate({_id:req.body._id},req.body,{new:true})
            return res.json({
                message:"user apply to Leave",
                
            })
        } catch (error) {
            return res.json({
                message:error
            })
        }
        }