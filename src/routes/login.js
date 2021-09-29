const { Router } = require('express')
const router = Router();

const { login } = require('../controllers/loginController/index');

router.post('/login', login);

module.exports = router;