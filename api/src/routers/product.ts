import express from 'express'

import {
  createProduct,
  findAll,
  findById,
  updatedProduct,
  removeProduct,
} from '../controllers/product'
import verifyAuthentication from '../middlewares/verifyAuthentication'
const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', verifyAuthentication, findAll)
router.get('/:productId', findById)
router.put('/:productId', updatedProduct)
router.delete('/:productId', removeProduct)
router.post('/', createProduct)

export default router
