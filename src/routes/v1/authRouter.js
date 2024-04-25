import express from 'express'

const authRouter = new express.Router()
authRouter.get('/', (req, res) => { res.send('Express on Fire') })

export {
  authRouter
}
