const express = require('express')
const conectarDB = require('./config/db')
const cors = require('cors')
const morgan = require('morgan')
const routeProduct = require('./routes/product.route')

const port = 3000
const app = express()

conectarDB()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/api', routeProduct)

app.get('/', (req, res) => {
  res.status(200).json({ ok: 'API Products' })
})

app.listen(port, () => {
  console.log(`Servidor Corriendo en http://localhost:${port}`)
})
