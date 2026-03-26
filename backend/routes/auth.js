const express = require('express');
const { signup, login, getProfile } = require('../controllers/authController');
const { auth } = require('../middleware/auth');

const router = express.Router();

// @desc    Register user
// @route   POST /api/auth/signup
// @access  Public
router.post('/signup', signup);

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
router.post('/login', login);

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
router.get('/profile', auth, getProfile);

module.exports = router;
