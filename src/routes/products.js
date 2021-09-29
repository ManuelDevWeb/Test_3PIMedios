const { Router } = require('express')
const router = Router();

const { createProduct } = require('../controllers/productController/index');

router.post('/products', createProduct)

module.exports = router;