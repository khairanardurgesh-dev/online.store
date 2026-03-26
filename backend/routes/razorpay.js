const express = require('express');
const {
  createRazorpayOrder,
  verifyRazorpayPayment,
  getPaymentDetails
} = require('../controllers/razorpayController');
const { auth } = require('../middleware/auth');

const router = express.Router();

// @desc    Create Razorpay order
// @route   POST /api/razorpay/create-order
// @access  Private
router.post('/create-order', auth, createRazorpayOrder);

// @desc    Verify Razorpay payment
// @route   POST /api/razorpay/verify
// @access  Private
router.post('/verify', auth, verifyRazorpayPayment);

// @desc    Get payment details
// @route   GET /api/razorpay/payment/:paymentId
// @access  Private
router.get('/payment/:paymentId', auth, getPaymentDetails);

module.exports = router;
