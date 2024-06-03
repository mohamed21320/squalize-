import { Router } from "express";
import * as PC from "./post.controller.js";



const router = Router()
router.get('/',PC.getPosts) 
router.get('/specificPosts',PC.specificPosts) 
router.post('/',PC.addPosts) 
router.put('/:id',PC.updatePosts) 
router.delete('/:id',PC.deletePosts) 




export default router