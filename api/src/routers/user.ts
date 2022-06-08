import express from 'express'
import { verify, isAdmin } from '../middlewares/verifyAuthentication'

import {
  createUser,
  findAll,
  findById,
  removeUser,
  updatedUser,
} from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/user prefix
router.get('/', verify, isAdmin, findAll)
router.get('/:userId', verify, isAdmin, findById)
router.put('/:productId', verify, isAdmin, updatedUser)
router.delete('/:productId', verify, isAdmin, removeUser)
router.post('/', verify, isAdmin, createUser)

export default router
