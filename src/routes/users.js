const { Router } = require('express');
const router = Router();

const { createUser, getUsers, deleteUser, roleUser, createRole } = require('../controllers/userController/index');

router.get('/users', getUsers);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', roleUser);
router.post('/roles', createRole)

module.exports = router;