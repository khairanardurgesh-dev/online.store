require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Create uploads directories if they don't exist
const uploadsDir = path.join(__dirname, 'uploads');
const productsDir = path.join(uploadsDir, 'products');
const thumbnailsDir = path.join(uploadsDir, 'thumbnails');

[uploadsDir, productsDir, thumbnailsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.'
  }
});
app.use('/api/', limiter);

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com'] 
    : ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Mock products endpoint
app.get('/api/products', (req, res) => {
  const mockProducts = [
    {
      _id: '1',
      title: 'Professional Portfolio Template Pack',
      description: 'A stunning collection of 5 modern portfolio templates perfect for developers, designers, and creatives.',
      price: 29.99,
      thumbnail: '/uploads/thumbnails/portfolio-thumb.jpg',
      features: [
        '5 Unique Portfolio Templates',
        'Fully Responsive Design',
        'Multiple Color Schemes',
        'SEO Optimized'
      ],
      category: 'portfolio',
      isActive: true,
      createdAt: new Date().toISOString()
    },
    {
      _id: '2',
      title: 'Ultimate Resume Kit 2024',
      description: 'Stand out from the crowd with our comprehensive resume kit. Includes 10 professional resume templates.',
      price: 19.99,
      thumbnail: '/uploads/thumbnails/resume-thumb.jpg',
      features: [
        '10 Professional Resume Templates',
        '5 Cover Letter Templates',
        'Interview Preparation Guide',
        'ATS-Friendly Formats'
      ],
      category: 'resume',
      isActive: true,
      createdAt: new Date().toISOString()
    },
    {
      _id: '3',
      title: 'Freelancing Business Starter Kit',
      description: 'Everything you need to start your freelancing career. Includes contract templates and guides.',
      price: 49.99,
      thumbnail: '/uploads/thumbnails/freelancing-thumb.jpg',
      features: [
        '20 Contract Templates',
        '15 Proposal Templates',
        'Pricing Strategy Guide',
        'Client Management System'
      ],
      category: 'freelancing',
      isActive: true,
      createdAt: new Date().toISOString()
    }
  ];

  res.status(200).json({
    success: true,
    data: mockProducts,
    message: 'Products retrieved successfully'
  });
});

// Mock single product endpoint
app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const mockProducts = [
    {
      _id: '1',
      title: 'Professional Portfolio Template Pack',
      description: 'A stunning collection of 5 modern portfolio templates perfect for developers, designers, and creatives. Each template is fully responsive, optimized for performance, and includes multiple color schemes.',
      price: 29.99,
      thumbnail: '/uploads/thumbnails/portfolio-thumb.jpg',
      fileUrl: '/uploads/products/portfolio-templates.zip',
      fileName: 'portfolio-templates.zip',
      features: [
        '5 Unique Portfolio Templates',
        'Fully Responsive Design',
        'Multiple Color Schemes',
        'SEO Optimized',
        'Clean & Modern Code',
        'Free Updates for Life'
      ],
      category: 'portfolio',
      isActive: true,
      createdAt: new Date().toISOString()
    }
  ];

  const product = mockProducts.find(p => p._id === id);
  
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  res.status(200).json({
    success: true,
    data: product,
    message: 'Product retrieved successfully'
  });
});

// Mock auth endpoints
app.post('/api/auth/signup', (req, res) => {
  const { name, email, password } = req.body;
  
  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Please provide name, email, and password'
    });
  }

  // Mock user creation
  const mockUser = {
    _id: '1',
    name,
    email,
    role: 'user',
    createdAt: new Date().toISOString()
  };

  const mockToken = 'mock_jwt_token_' + Date.now();

  res.status(201).json({
    success: true,
    data: {
      user: mockUser,
      token: mockToken
    },
    message: 'User registered successfully'
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // Simple validation
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Please provide email and password'
    });
  }

  // Mock login (accept any email/password for demo)
  const mockUser = {
    _id: '1',
    name: 'Demo User',
    email,
    role: email === 'admin@digitalstore.com' ? 'admin' : 'user',
    createdAt: new Date().toISOString()
  };

  const mockToken = 'mock_jwt_token_' + Date.now();

  res.status(200).json({
    success: true,
    data: {
      user: mockUser,
      token: mockToken
    },
    message: 'Login successful'
  });
});

// Handle 404 errors
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error'
  });
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Available endpoints:`);
  console.log(`- Health: http://localhost:${PORT}/health`);
  console.log(`- Products: http://localhost:${PORT}/api/products`);
  console.log(`- Auth: http://localhost:${PORT}/api/auth`);
});

module.exports = app;
