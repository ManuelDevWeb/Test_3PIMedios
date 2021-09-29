const { Router } = require('express')
const router = Router();

const { authenticateToken } = require('../middlewares/auth');

const { createProduct, getProducts } = require('../controllers/productController/index');

router.get('/products', getProducts);
router.post('/products', authenticateToken, createProduct);

module.exports = router;