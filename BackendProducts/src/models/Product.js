const mongoose = require('mongoose')

const ProductShema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  image: {
    type: String,
    require: false
  },
  fechaCreacion: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Product', ProductShema)
