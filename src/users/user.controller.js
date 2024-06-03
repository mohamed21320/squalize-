
import userModel from './../../DB/models/user.model.js';

export const getUser =async (req,res,next) => {
const{id} = req.query
    const user=await userModel.findAndCountAll({})
    res.status(200).json({msg:"success",count:user.count,user:user.rows})
}

////////////////// addUser/////////////////
export const addUser=async(req,res,next)=>{
    const {name,email,password,age}=req.body
const user=await userModel.findOrCreate({
    where: {email,name,password,age}
})
if(!user[1]){
    return res.status(404).json({msg:" Email already Exist"})
}
return res.status(200).json({msg:"success",user:user[0]})
}

///////////////////updateUser////////////////////
export const updateUser=async(req,res,next)=>{
    const {age}=req.body
    const {id}=req.params
const user=await userModel.update({age},{
    where: {id}
})
if(!user){
    return res.status(404).json({msg:" User not found"})
}
return res.status(200).json({msg:"success"})
}

///////////////////deleteUser////////////////////
export const deleteUser=async(req,res,next)=>{
    const {id}=req.params
const user=await userModel.destroy({where: {id}})
if(!user){
    return res.status(404).json({msg:" User not found"})
}
return res.status(200).json({msg:"success"})

}