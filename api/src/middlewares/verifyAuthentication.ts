import { Request, Response, NextFunction } from 'express'

import ApiError, { ForbiddenError } from '../helpers/apiError'
import logger from '../util/logger'
import jwt from 'jsonwebtoken'

export default function (req: Request, res: Response, next: NextFunction) {
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
