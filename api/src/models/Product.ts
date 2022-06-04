import Mongoose, { Document } from 'mongoose'
//type definitions for products
export type ProductDocument = Document & {
  title: string
  desc: string
  img: string
  categories: []
  size: string
  price: number
}

const productSchema = new Mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
    },
    size: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)
export default Mongoose.model<ProductDocument>('Product', productSchema)
