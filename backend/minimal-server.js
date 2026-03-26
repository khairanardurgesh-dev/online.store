const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

app.get('/api/products', (req, res) => {
  res.json({
    success: true,
    data: [
      {
        _id: '1',
        title: 'Portfolio Template',
        description: 'Professional portfolio template',
        price: 29.99,
        thumbnail: 'thumb1.jpg',
        features: ['Responsive', 'Modern'],
        category: 'portfolio',
        isActive: true
      },
      {
        _id: '2',
        title: 'Resume Kit',
        description: 'Complete resume kit',
        price: 19.99,
        thumbnail: 'thumb2.jpg',
        features: ['ATS Friendly', 'Multiple Templates'],
        category: 'resume',
        isActive: true
      }
    ]
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  res.json({
    success: true,
    data: {
      user: {
        _id: '1',
        name: 'Demo User',
        email,
        role: email === 'admin@digitalstore.com' ? 'admin' : 'user'
      },
      token: 'mock_token_' + Date.now()
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
