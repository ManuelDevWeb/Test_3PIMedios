const { Router } = require('express')
const router = Router();

const { login, refreshToken, deleteToken } = require('../controllers/loginController/index');

router.post('/login', login);
router.get('/tokenRefresh', refreshToken)
router.delete('/deleteToken', deleteToken)

module.exports = router;