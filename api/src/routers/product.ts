import express from 'express'

import {
  createProduct,
  findAll,
  findById,
  updatedProduct,
  removeProduct,
  sortByPrice,
  findByCategory,
  pagination,
} from '../controllers/product'
import { verify, isAdmin } from '../middlewares/verifyAuthentication'
const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAll)
router.get('/:productId', findById)
router.put('/:productId', verify, isAdmin, updatedProduct)
router.delete('/:productId', verify, isAdmin, removeProduct)
router.post('/', verify, isAdmin, createProduct)
router.get('/', sortByPrice)
router.get('/', pagination)

export default router
