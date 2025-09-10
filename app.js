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

// Middleware to parse JSON bodies
app.use(express.json());

// POST route to add a snack
app.post('/snacks', (req, res) => {
  const newSnack = req.body.snack; // Assuming the request body is { "snack": "popcorn" }

  if (!newSnack) {
    return res.status(400).json({ message: "Snack name is required" });
  }

  // Simulating saving the snack (In a real app, you'd save it to a database)
  snacks.push(newSnack);

  res.status(201).json({
    message: `Successfully added ${newSnack}`,
    snacks: snacks, // Return the updated list of snacks
  });
});
