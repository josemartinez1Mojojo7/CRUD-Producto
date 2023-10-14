const Product = require('../models/Product')

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: 'El Producto no Existe' })
    }
    return res.status(200).json(product)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body)
    await product.save()
    return res.status(201).json(product)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
exports.updateProduct = async (req, res) => {
  try {
    const { name, category, price, image } = req.body
    let product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ msj: 'El Producto no Existe' })
    }
    product.name = name
    product.category = category
    product.price = price
    product.image = image

    product = await Product.findOneAndUpdate({ _id: req.params.id }, product, { new: true })
    return res.status(204).json(product)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ msj: 'El Producto no Existe' })
    }
    await Product.findOneAndRemove({ _id: req.params.id })
    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
}
