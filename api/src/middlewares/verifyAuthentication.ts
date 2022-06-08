import { Request, Response, NextFunction, RequestHandler } from 'express'

import ApiError, { ForbiddenError } from '../helpers/apiError'
import logger from '../util/logger'
import jwt from 'jsonwebtoken'

export interface User {
  email: string
  role: string
  iat: number
  exp: number
}

const verify = (req: Request, res: Response, next: NextFunction) => {
  try {
    const auth = req.headers.authorization || ''

    console.log('req: ', req.headers)
    const token = auth.split(' ')[1]
    console.log('token', token)
    const JWT_SECRET = process.env.JWT_SECRET as string

    const user = jwt.verify(token, JWT_SECRET)
    req.user = user
    console.log('user', user)
    next()
  } catch (err) {
    throw new ForbiddenError()
  }
}

const isAdmin: RequestHandler = (req, res, next) => {
  const adminFromReq = req.user.role
  console.log('isAdmin request is *******', adminFromReq)

  if (req.user && adminFromReq === 'USER') {
    console.log('We did it')
    next()
  } else {
    throw new ForbiddenError()
  }
  // next()
}

export { isAdmin, verify }
