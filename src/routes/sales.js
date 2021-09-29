const { Router } = require('express');
const router = Router();

const { getSales, createSale, deleteSale, updateSale } = require('../controllers/saleController/index');

router.get('/sales', getSales);
router.post('/sales', createSale);
router.delete('/sales/:id', deleteSale);
router.put('/sales/:id', updateSale);

module.exports = router;