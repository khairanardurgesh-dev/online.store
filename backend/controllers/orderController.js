const Order = require('../models/Order');
const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const createOrder = async (req, res, next) => {
  try {
    const { productId } = req.body;

    // Validate product
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    if (!product.isActive) {
      return res.status(400).json({
        success: false,
        message: 'Product is not available'
      });
    }

    // Check if user already purchased this product
    const existingOrder = await Order.findOne({
      userId: req.user.id,
      productId: productId,
      status: 'completed'
    });

    if (existingOrder) {
      return res.status(400).json({
        success: false,
        message: 'You have already purchased this product'
      });
    }

    // Create order
    const order = await Order.create({
      userId: req.user.id,
      productId: productId,
      amount: product.price,
      status: 'pending'
    });

    res.status(201).json({
      success: true,
      data: order,
      message: 'Order created successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Verify payment and update order
// @route   POST /api/orders/verify
// @access  Private
const verifyPayment = async (req, res, next) => {
  try {
    const { orderId, paymentId, signature } = req.body;

    // Find order
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Verify order belongs to user
    if (order.userId.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    // Update order with payment details
    order.razorpayOrderId = orderId;
    order.razorpayPaymentId = paymentId;
    order.razorpaySignature = signature;
    order.status = 'completed';

    await order.save();

    res.status(200).json({
      success: true,
      data: order,
      message: 'Payment verified successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user orders
// @route   GET /api/orders/user
// @access  Private
const getUserOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ userId: req.user.id })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: orders,
      message: 'Orders retrieved successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all orders (Admin)
// @route   GET /api/orders
// @access  Private (Admin only)
const getAllOrders = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    
    // Build query
    const query = {};
    if (status && status !== 'all') {
      query.status = status;
    }

    // Execute query with pagination
    const orders = await Order.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    // Get total count for pagination
    const total = await Order.countDocuments(query);

    res.status(200).json({
      success: true,
      data: orders,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      },
      message: 'Orders retrieved successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Download product file
// @route   GET /api/orders/download/:orderId
// @access  Private
const downloadFile = async (req, res, next) => {
  try {
    const { orderId } = req.params;

    // Find order
    const order = await Order.findById(orderId).populate('productId');
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Verify order belongs to user
    if (order.userId.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    // Verify payment is completed
    if (order.status !== 'completed') {
      return res.status(400).json({
        success: false,
        message: 'Payment not completed for this order'
      });
    }

    // Check if file exists
    const filePath = order.productId.fileUrl;
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        message: 'File not found'
      });
    }

    // Update download count
    order.downloadCount += 1;
    order.lastDownloadedAt = new Date();
    await order.save();

    // Send file
    res.download(filePath, order.productId.fileName);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrder,
  verifyPayment,
  getUserOrders,
  getAllOrders,
  downloadFile
};
