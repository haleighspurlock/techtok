const express = require('express');
const app = express();
const port = 3000;

// Simple API route
app.get('/snacks', (req, res) => {
  const snacks = ['chippies', 'waterlemon', 'popsicles', 'blueberry bar'];
  res.json(snacks);
});

// Root route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Snack API! 🍪');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
