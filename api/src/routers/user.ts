import express from 'express'

import { createUser, findAll, findById } from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/user prefix
router.get('/', findAll)
router.get('/:userId', findById)
router.post('/', createUser)

export default router
