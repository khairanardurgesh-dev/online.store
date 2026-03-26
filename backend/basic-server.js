const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});

app.get('/api/products', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, title: 'Portfolio Template', price: 29.99, description: 'Professional portfolio template' },
      { id: 2, title: 'Resume Kit', price: 19.99, description: 'Complete resume kit' }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
