const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getAllProducts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, category, search } = req.query;
    
    // Build query
    const query = { isActive: true };
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (search) {
      query.$text = { $search: search };
    }

    // Execute query with pagination
    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    // Get total count for pagination
    const total = await Product.countDocuments(query);

    res.status(200).json({
      success: true,
      data: products,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      },
      message: 'Products retrieved successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    if (!product.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Product is not available'
      });
    }

    res.status(200).json({
      success: true,
      data: product,
      message: 'Product retrieved successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new product
// @route   POST /api/products
// @access  Private (Admin only)
const createProduct = async (req, res, next) => {
  try {
    const { title, description, price, features, category } = req.body;
    
    // Get file paths from uploaded files
    const thumbnail = req.files?.thumbnail?.[0]?.path;
    const fileUrl = req.files?.file?.[0]?.path;
    const fileName = req.files?.file?.[0]?.originalname;

    if (!thumbnail || !fileUrl || !fileName) {
      return res.status(400).json({
        success: false,
        message: 'Thumbnail and product file are required'
      });
    }

    const product = await Product.create({
      title,
      description,
      price,
      thumbnail,
      fileUrl,
      fileName,
      features: features ? features.split(',').map(f => f.trim()) : [],
      category
    });

    res.status(201).json({
      success: true,
      data: product,
      message: 'Product created successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private (Admin only)
const updateProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    const { title, description, price, features, category, isActive } = req.body;
    
    // Update fields
    const updateData = {
      title,
      description,
      price,
      features: features ? features.split(',').map(f => f.trim()) : product.features,
      category,
      isActive: isActive !== undefined ? isActive : product.isActive
    };

    // Update files if provided
    if (req.files?.thumbnail?.[0]) {
      updateData.thumbnail = req.files.thumbnail[0].path;
    }
    
    if (req.files?.file?.[0]) {
      updateData.fileUrl = req.files.file[0].path;
      updateData.fileName = req.files.file[0].originalname;
    }

    product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      data: product,
      message: 'Product updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private (Admin only)
const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      data: {},
      message: 'Product deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
