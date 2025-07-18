const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // allow cross-origin requests
app.use(express.json()); // parse JSON

// sample API route
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' }
  ]);
});

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
