const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

// Register a new user
router.post('/register', userController.register);

// Login a user
router.post('/login', userController.login);

// Forgot password
router.post('/forgot-password', userController.forgotPassword);

// Reset password
router.post('/reset-password', userController.resetPassword);

module.exports = router;

