const express = require('express');
const app = express();
const port = 3000;

// Simple API route
app.get('/snacks', (req, res) => {
  const snacks = ['chippies', 'waterlemon', 'blueberry bar', 'chocolate milk', 'popsicles'];

  // Get the search query parameter from the URL (e.g., ?search=chip)
  const search = req.query.search;

  if (search) {
    const filteredSnacks = snacks.filter(snack =>
      snack.toLowerCase().includes(search.toLowerCase())
    );
    res.json(filteredSnacks);
  } else {
    res.json(snacks); // No search param? Return all snacks.
  }
});


// Root route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Snack API! 🍪');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
