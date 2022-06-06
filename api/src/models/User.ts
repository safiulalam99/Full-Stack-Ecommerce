import Mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  username: string
  email: string
  password: string
  isAdmin: boolean
  role: Role
}
enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
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

    isAdmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: Role,
      default: Role.USER,
    },
  },
  { timestamps: true }
)
export default Mongoose.model<UserDocument>('User', userSchema)
