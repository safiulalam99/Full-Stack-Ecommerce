import Mongoose, { Document } from 'mongoose'
//type definitions for products
export type ProductDocument = Document & {
  name: string
  category: string[]
  price: number
  quantity: number
  description: string[]
}

const productSchema = new Mongoose.Schema({
  name: {
    type: String,
    index: true,
  },
  category: [String],
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: [String],
  isAdded: {
    type: Boolean,
  },
  image: [String],
})
export default Mongoose.model<ProductDocument>('Product', productSchema)
