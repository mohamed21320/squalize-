
import { Router } from 'express';
import * as UC from './user.controller.js';


const router = Router()

router.get('/',UC.getUser)
router.post('/',UC.addUser)
router.put('/:id',UC.updateUser)
router.delete('/:id',UC.deleteUser)


export default router