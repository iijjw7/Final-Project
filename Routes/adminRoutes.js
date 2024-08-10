const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');
const authMiddleware = require('../Middleware/auth');

// User management routes (Admin only)
router.post('/users', authMiddleware.verifyAdmin, adminController.createUser);
router.get('/users/:userId', authMiddleware.verifyAdmin, adminController.getUser);
router.get('/users', authMiddleware.verifyAdmin, adminController.getAllUsers);
router.put('/users/:userId', authMiddleware.verifyAdmin, adminController.updateUser);
router.delete('/users/:userId', authMiddleware.verifyAdmin, adminController.deleteUser);


module.exports = router;
