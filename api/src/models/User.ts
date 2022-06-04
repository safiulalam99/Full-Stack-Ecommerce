import Mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  username: string
  email: string
  password: string
  isAdmin: boolean
}

const userSchema = new Mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)
export default Mongoose.model<UserDocument>('User', userSchema)
