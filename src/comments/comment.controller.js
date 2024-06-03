import commentModel from "../../DB/models/comment.model.js"


export const getComment = async(req,res, next)=>{
    const comment =await commentModel.findAll()
  return  res.status(201).send({msg:"success",comment})
}

// add comment
export const addComment = async(req,res, next)=>{
  const{content,userId,postId} = req.body
  const comment =await commentModel.create({content,userId,postId})
return  res.status(201).send({msg:"success",comment})
}

// update comment
export const updateComment = async(req,res, next)=>{
const{content} = req.body
const{id}=req.params

  const comment =await commentModel.update({content},
    {where:{
      id
    }}
  )
return  res.status(201).send({msg:"success"})
}

// delete comment
export const deleteComment = async(req,res, next)=>{
  const{id}=req.params
  const comment =await commentModel.destroy({where:{id}})
return  res.status(201).send({msg:"success"})
}
