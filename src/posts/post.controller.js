import postModel from './../../DB/models/post.model.js';

export const getPosts=async (req,res,next) => {
    const post=await postModel.findAll()
    res.status(200).send({msg:"success",post})
}

export const specificPosts=async (req,res,next) => {
const{UserId} = req.body
    const post=await postModel.findOrCreate({where: {UserId}})
    res.status(200).json({msg:"success",post})
}

//////////////addPosts/////////////////// 
export const addPosts= async(req,res,next)=> {
    const{title,content,UserId}= req.body
    const post=await postModel.create({title,content,UserId})
    res.status(200).json({msg:"success",post})
}
//////////////updatePosts/////////////////// 
export const updatePosts= async(req,res,next)=> {
    const{content}= req.body
    const{id}= req.params
    const post=await postModel.update({content},{
        where:{
           id
        }
    })
    res.status(200).json({msg:"success"})
}
//////////////deletePosts/////////////////// 
export const deletePosts= async(req,res,next)=> {
    const{id}= req.params
    const post=await postModel.destroy({
        where:{
           id
        }
    })
    res.status(200).json({msg:"success"})
}