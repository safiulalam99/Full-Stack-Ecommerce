import Mongoose, { Document } from 'mongoose'
//type definitions for products
export type ProductDocument = Document & {
  name: string
  description: string
  image: string
  category: []
  size: string
  price: number
  quantity: number
}

const productSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    size: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
)
export default Mongoose.model<ProductDocument>('Product', productSchema)
