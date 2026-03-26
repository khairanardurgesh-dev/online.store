const express = require('express');
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const { auth, adminAuth } = require('../middleware/auth');
const { upload, handleMulterError } = require('../middleware/upload');

const router = express.Router();

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.get('/', getAllProducts);

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', getProductById);

// @desc    Create new product
// @route   POST /api/products
// @access  Private (Admin only)
router.post(
  '/',
  auth,
  adminAuth,
  upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'file', maxCount: 1 }
  ]),
  handleMulterError,
  createProduct
);

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private (Admin only)
router.put(
  '/:id',
  auth,
  adminAuth,
  upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'file', maxCount: 1 }
  ]),
  handleMulterError,
  updateProduct
);

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private (Admin only)
router.delete('/:id', auth, adminAuth, deleteProduct);

module.exports = router;
