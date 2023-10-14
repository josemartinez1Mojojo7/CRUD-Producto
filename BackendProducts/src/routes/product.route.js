const express = require('express')
const router = express.Router()
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller')

router.post('/products', createProduct)
router.get('/products', getProducts)

router.put('/products/:id', updateProduct)
router.get('/products/:id', getProduct)
router.delete('/products/:id', deleteProduct)

module.exports = router
