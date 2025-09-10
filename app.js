const express = require("express");
const app = express();
const port = 3000;
const snacks = ["chippies", "waterlemon", "blueberry bar", "chocolate milk"];

// Simple API route
app.get("/snacks", (req, res) => {
  const search = req.query.search;

  if (search) {
    const filteredSnacks = snacks.filter((snack) =>
      snack.toLowerCase().includes(search.toLowerCase())
    );
    res.json(filteredSnacks);
  } else {
    res.json(snacks); // No search param? Return all snacks.
  }
});

// Root route (optional)
app.get("/", (req, res) => {
  res.send("Welcome to the Snack API! 🍪");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Middleware to parse JSON bodies
app.use(express.json());

// POST route to add a snack
app.post('/snacks', (req, res) => {
  let newSnack = req.body.snack;
  console.log('\nReceived POST /snacks');
  console.log('Original input:', newSnack);

  if (!newSnack || typeof newSnack !== 'string') {
    console.log('❌ Invalid input');
    return res.status(400).json({ message: 'Snack name is required and must be a string.' });
  }

  newSnack = newSnack.trim().toLowerCase();
  console.log('Normalized input:', newSnack);

  if (newSnack === '') {
    console.log('❌ Snack is empty after trimming');
    return res.status(400).json({ message: 'Snack name cannot be empty.' });
  }

  console.log('Current snack list:', snacks);
  const normalizedSnacks = snacks.map(s => s.toLowerCase());
  console.log('Normalized snack list:', normalizedSnacks);

  if (normalizedSnacks.includes(newSnack)) {
    console.log('❌ Duplicate found:', newSnack);
    return res.status(409).json({ message: `${newSnack} is already in the snack list.` });
  }

  snacks.push(newSnack);
  console.log('✅ Snack added:', newSnack);
  console.log('Updated snack list:', snacks);

  res.status(201).json({
    message: `Successfully added "${newSnack}"`,
    snacks: snacks,
  });
});
