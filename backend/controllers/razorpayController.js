const Razorpay = require('razorpay');
const crypto = require('crypto');

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// @desc    Create Razorpay order
// @route   POST /api/razorpay/create-order
// @access  Private
const createRazorpayOrder = async (req, res, next) => {
  try {
    const { amount, productId } = req.body;

    // Validate amount
    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid amount'
      });
    }

    // Convert amount to paise (Razorpay expects amount in paise)
    const amountInPaise = amount * 100;

    // Create Razorpay order
    const options = {
      amount: amountInPaise,
      currency: 'INR',
      receipt: `receipt_${productId}_${Date.now()}`,
      notes: {
        productId: productId,
        userId: req.user.id
      }
    };

    const razorpayOrder = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      data: {
        orderId: razorpayOrder.id,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        receipt: razorpayOrder.receipt
      },
      message: 'Razorpay order created successfully'
    });
  } catch (error) {
    console.error('Razorpay order creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create Razorpay order',
      error: error.message
    });
  }
};

// @desc    Verify Razorpay payment
// @route   POST /api/razorpay/verify
// @access  Private
const verifyRazorpayPayment = async (req, res, next) => {
  try {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

    // Verify signature
    const body = razorpayOrderId + '|' + razorpayPaymentId;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex');

    if (expectedSignature !== razorpaySignature) {
      return res.status(400).json({
        success: false,
        message: 'Invalid payment signature'
      });
    }

    // You can fetch payment details from Razorpay if needed
    const payment = await razorpay.payments.fetch(razorpayPaymentId);

    res.status(200).json({
      success: true,
      data: {
        paymentId: payment.id,
        orderId: payment.order_id,
        status: payment.status,
        amount: payment.amount,
        method: payment.method
      },
      message: 'Payment verified successfully'
    });
  } catch (error) {
    console.error('Razorpay verification error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to verify payment',
      error: error.message
    });
  }
};

// @desc    Get payment details
// @route   GET /api/razorpay/payment/:paymentId
// @access  Private
const getPaymentDetails = async (req, res, next) => {
  try {
    const { paymentId } = req.params;

    const payment = await razorpay.payments.fetch(paymentId);

    res.status(200).json({
      success: true,
      data: payment,
      message: 'Payment details retrieved successfully'
    });
  } catch (error) {
    console.error('Razorpay payment details error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch payment details',
      error: error.message
    });
  }
};

module.exports = {
  createRazorpayOrder,
  verifyRazorpayPayment,
  getPaymentDetails
};
