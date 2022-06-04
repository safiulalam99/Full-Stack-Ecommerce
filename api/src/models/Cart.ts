import Mongoose, { Document } from 'mongoose'
//type definitions for products
export type CartDocument = Document & {
  userId: string
  products: []
}

const cartSchema = new Mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
)
export default Mongoose.model<CartDocument>('Cart', cartSchema)
