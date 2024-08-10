const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');
const authMiddleware = require('../Middleware/auth');

// Product management routes
router.post('/', authMiddleware.verifyAdmin, adminController.createProduct);
router.get('/:productId', adminController.getProduct);
router.get('/', adminController.getAllProducts);
router.put('/:productId', authMiddleware.verifyAdmin, adminController.updateProduct);
router.delete('/:productId', authMiddleware.verifyAdmin, adminController.deleteProduct);

module.exports = router;
