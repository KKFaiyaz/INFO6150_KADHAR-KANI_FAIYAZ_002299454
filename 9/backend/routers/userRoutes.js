const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.put('/edit', userController.editUser);
router.delete('/delete', userController.deleteUser);
router.post('/login', userController.loginUser);

module.exports = router;
