const mongoose = require('mongoose')
require('dotenv').config()

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('DB Conectado')
  } catch (error) {
    console.log(error)
  }
}

module.exports = conectarDB
