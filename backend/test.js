require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/test', (req, res) => {
  res.json({
    success: true,
    message: 'Backend test is working!',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
  console.log(`Test endpoint: http://localhost:${PORT}/test`);
});
