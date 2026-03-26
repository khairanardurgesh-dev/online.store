require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));

// Body parser middleware
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Simple server is running',
    timestamp: new Date().toISOString()
  });
});

// Test API endpoint
app.get('/api/test', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is working!',
    data: [
      { id: 1, title: 'Test Product 1', price: 29.99 },
      { id: 2, title: 'Test Product 2', price: 19.99 }
    ]
  });
});

// Handle 404 errors
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

const server = app.listen(PORT, () => {
  console.log(`Simple server running on port ${PORT}`);
  console.log(`Test endpoints:`);
  console.log(`- Health: http://localhost:${PORT}/health`);
  console.log(`- API Test: http://localhost:${PORT}/api/test`);
});

module.exports = app;
