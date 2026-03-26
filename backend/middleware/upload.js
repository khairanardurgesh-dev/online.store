const multer = require('multer');
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === 'file') {
      cb(null, 'uploads/products/');
    } else if (file.fieldname === 'thumbnail') {
      cb(null, 'uploads/thumbnails/');
    } else {
      cb(new Error('Invalid field name'), null);
    }
  },
  filename: function (req, file, cb) {
    // Generate unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'file') {
    // Allow zip, pdf, doc, docx files for product files
    const allowedTypes = ['.zip', '.pdf', '.doc', '.docx', '.txt'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only ZIP, PDF, DOC, DOCX files are allowed for product files.'), false);
    }
  } else if (file.fieldname === 'thumbnail') {
    // Allow jpg, jpeg, png, gif for thumbnails
    const allowedTypes = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid image type. Only JPG, JPEG, PNG, GIF, WEBP files are allowed for thumbnails.'), false);
    }
  } else {
    cb(new Error('Invalid field name'), false);
  }
};

// Initialize upload middleware
const upload = multer({
  storage: storage,
  limits: {
    fileSize: function (req, file, cb) {
      if (file.fieldname === 'file') {
        cb(null, 50 * 1024 * 1024); // 50MB for product files
      } else if (file.fieldname === 'thumbnail') {
        cb(null, 5 * 1024 * 1024); // 5MB for thumbnails
      } else {
        cb(new Error('Invalid field name'), false);
      }
    }
  },
  fileFilter: fileFilter
});

// Handle multer errors
const handleMulterError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File too large',
        error: err.message
      });
    } else if (err.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({
        success: false,
        message: 'Too many files',
        error: err.message
      });
    } else if (err.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.status(400).json({
        success: false,
        message: 'Unexpected file field',
        error: err.message
      });
    }
  } else if (err) {
    // Handle custom file filter errors
    return res.status(400).json({
      success: false,
      message: 'File upload error',
      error: err.message
    });
  }
  next();
};

module.exports = { upload, handleMulterError };
