import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { authRouter } from './routes/v1/authRouter.js'

export const app = express()

// set security HTTP headers
app.use(helmet())

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

// gzip compression
app.use(compression())

// enable cors
app.use(cors())
app.options('*', cors())

// v1 api routes
app.use(authRouter)
