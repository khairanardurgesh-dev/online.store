const express = require('express');
const {
  createOrder,
  verifyPayment,
  getUserOrders,
  getAllOrders,
  downloadFile
} = require('../controllers/orderController');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
router.post('/', auth, createOrder);

// @desc    Verify payment and update order
// @route   POST /api/orders/verify
// @access  Private
router.post('/verify', auth, verifyPayment);

// @desc    Get user orders
// @route   GET /api/orders/user
// @access  Private
router.get('/user', auth, getUserOrders);

// @desc    Get all orders (Admin)
// @route   GET /api/orders
// @access  Private (Admin only)
router.get('/', auth, adminAuth, getAllOrders);

// @desc    Download product file
// @route   GET /api/orders/download/:orderId
// @access  Private
router.get('/download/:orderId', auth, downloadFile);

module.exports = router;
