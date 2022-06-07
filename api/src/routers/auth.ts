import express from 'express'
import passport from 'passport'
import jwt, { Secret } from 'jsonwebtoken'

import { googleSignIn } from '../controllers/auth'

const router = express.Router()

// Every path we define here will get /api/v1/login prefix

router.post(
  '/google',
  passport.authenticate('google-id-token', { session: false }),
  googleSignIn
)

export default router
