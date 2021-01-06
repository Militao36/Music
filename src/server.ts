import express from 'express'
import cors from 'cors'
import path from 'path'

import { router } from '@routes/routes'
const app = express()

app.use(cors())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())

app.use(router)

app.get('/version', (req, res) => {
  return {
    version: '0.0.0'
  }
})

app.listen(3333, () => console.log('http://localhost:3333'))
