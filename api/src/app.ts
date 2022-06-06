// @ts-ignore

import express from 'express'
// import lusca from 'lusca' will be used later
import dotenv from 'dotenv'
import cors from 'cors'

import productRouter from './routers/product'
import userRouter from './routers/user'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import passport from 'passport'
import loginWithGoogle from './passport/google'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

// Global middleware
app.use(apiContentType)
app.use(express.json())
app.use(cors())

app.use(passport.initialize())
passport.use(loginWithGoogle())

app.post(
  '/google-login',
  passport.authenticate('google-id-token', { session: false }),
  (req, res) => {
    console.log('USER FROM CONTROLLER', req.user)
    res.json('hey there')
  }
)

// Set up routers
app.use('/api/v1/products', productRouter)
app.use('/api/v1/user', userRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
