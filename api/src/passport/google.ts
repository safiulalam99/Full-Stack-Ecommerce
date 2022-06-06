// @ts-ignore
import GoogleStrategy from 'passport-google-id-token'
import User, { UserDocument } from '../models/User'
import UserService from '../services/user'

const isAdmin = (email: string) => {
  // const [, domain] = email.split('@')
  if (email !== 'JWT') return false
  return true
}

const loginWithGoogle = () => {
  return new GoogleStrategy(
    {
      clienTId: process.env.CLIENT_ID,
    },
    async (parsedToken: any, googleID: any, done: any) => {
      const myUser = await UserService.findOne(parsedToken.payload.email)
      console.log('Token', parsedToken.payload.email)
      console.log('usersss', myUser)
      if (!myUser) {
        const user = {
          username: parsedToken.payload.given_name,
          email: parsedToken.payload.email,
          role: isAdmin(parsedToken.header.typ) ? 'ADMIN' : 'USER',
        } as UserDocument
        const newUser = new User(user)
        await UserService.save(newUser)
        done(null, user)
      }
      done(null, {})
    }
  )
}
export default loginWithGoogle
