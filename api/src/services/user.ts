import User, { UserDocument } from '../models/User'
import { NotFoundError } from '../helpers/apiError'

const findAll = async (): Promise<UserDocument[]> => {
  return User.find().sort({ name: 1, price: -1 })
}

const findOne = async (email: string): Promise<UserDocument | null> => {
  console.log('email:', email)
  return User.findOne({ email })
}

const save = async (user: UserDocument): Promise<UserDocument | null> => {
  return user.save()
}

const create = async (user: UserDocument): Promise<UserDocument> => {
  return user.save()
}

const findById = async (userId: string): Promise<UserDocument> => {
  const foundUser = await User.findById(userId)

  if (!foundUser) {
    throw new NotFoundError(`Product ${userId} not found`)
  }

  return foundUser
}

export default {
  save,
  findAll,
  findOne,
  create,
  findById,
}
