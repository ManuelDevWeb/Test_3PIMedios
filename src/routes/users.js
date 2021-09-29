const { Router } = require('express');
const router = Router();

const { authenticateToken } = require('../middlewares/auth');

const { createUser, getUsers, deleteUser, roleUser, createRole } = require('../controllers/userController/index');

router.get('/users', authenticateToken, getUsers);
router.post('/users', authenticateToken, createUser);
router.delete('/users/:id', authenticateToken, deleteUser);
router.put('/users/:id', authenticateToken, roleUser);
router.post('/roles', authenticateToken, createRole)

module.exports = router;