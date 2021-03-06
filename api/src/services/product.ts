import Product, { ProductDocument } from '../models/Product'
import { NotFoundError } from '../helpers/apiError'

const create = async (product: ProductDocument): Promise<ProductDocument> => {
  return product.save()
}

const findById = async (productId: string): Promise<ProductDocument> => {
  const foundProduct = await Product.findById(productId)

  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }

  return foundProduct
}
const findByCategory = async (qcategory: any) => {
  const foundProduct = await Product.find({
    category: { $in: [qcategory] },
  })

  if (!foundProduct) {
    throw new NotFoundError(`Product ${qcategory} not found`)
  }

  return foundProduct
}

const findAll = async (): Promise<ProductDocument[]> => {
  return Product.find().sort({ name: 1, price: -1 })
}

const pagi = async (): Promise<ProductDocument[]> => {
  return Product.find().sort({ name: 1, price: -1 })
}

const findOne = async (_id: string): Promise<ProductDocument | null> => {
  return Product.findById({ _id })
}

const update = async (
  productId: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument | null> => {
  const foundProduct = await Product.findByIdAndUpdate(productId, update, {
    new: true,
  })

  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }

  return foundProduct
}

const deleteProduct = async (
  productId: string
): Promise<ProductDocument | null> => {
  const foundProduct = Product.findByIdAndDelete(productId)

  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }

  return foundProduct
}

const sortProduct = async (): Promise<ProductDocument[]> => {
  return Product.find().sort({ price: 1 })
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteProduct,
  findOne,
  sortProduct,
  findByCategory,
}
