const { Router } = require('express')
const router = Router();


const { createProduct, getProducts } = require('../controllers/productController/index');

router.get('/products', getProducts);
router.post('/products', createProduct);

module.exports = router;