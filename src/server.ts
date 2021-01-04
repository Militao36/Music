import express from 'express'
import { router } from '@routes/routes'
const app = express()

app.use(router)

app.get('/version', (req, res) => {
  return {
    version: '0.0.0'
  }
})

app.listen(3333)
