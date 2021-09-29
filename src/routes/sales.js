const { Router } = require('express');
const router = Router();

const { authenticateToken } = require('../middlewares/auth');

const { getSales, createSale, deleteSale, updateSale } = require('../controllers/saleController/index');

router.get('/sales', getSales);
router.post('/sales', createSale);
router.delete('/sales/:id', authenticateToken, deleteSale);
router.put('/sales/:id', authenticateToken, updateSale);

module.exports = router;