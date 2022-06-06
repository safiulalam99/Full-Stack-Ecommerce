import express from 'express'

import {
  createProduct,
  findAll,
  findById,
  updatedProduct,
  removeProduct,
} from '../controllers/product'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAll)
router.get('/:productId', findById)
router.put('/:productId', updatedProduct)
router.delete('/:productId', removeProduct)
router.post('/', createProduct)

export default router
