import { Request, Response, NextFunction } from 'express'
import Product, { ProductDocument } from '../models/Product'
import ProductService from '../services/product'
import jwt, { Secret } from 'jsonwebtoken'

import { BadRequestError } from '../helpers/apiError'

// POST /product
export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, category, price, quantity, description, isAdded, image } =
      req.body

    const product = new Product({
      name,
      category,
      price,
      quantity,
      description,
      isAdded,
      image,
    })

    await ProductService.create(product)
    res.json(product)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /products/:productsId
export const updatedProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const productId = req.params.productId
    const updatedProduct = await ProductService.update(productId, update)
    res.json(updatedProduct)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /products
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await ProductService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /products/:productId
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await ProductService.findById(req.params.productId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /products/:productId
export const removeProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await ProductService.deleteProduct(req.params.productId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
// signin function
export const googleSignIn = (req: Request, res: Response) => {
  const JWT_SECRET = process.env.JWT_SECRET as string
  const user = req.user as { email: string; role: string }
  const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, {
    expiresIn: '3h',
  })
  // console.log('USER FROM CONTROLLER', user)
  res.json({ token })
}
