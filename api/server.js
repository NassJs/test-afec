const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db.js');
const productRoutes = require('./src/routes/productRoutes.js');
const path = require('path');
console.log('Path to productRoutes:', path.resolve(__dirname, './routes/productRoutes'));

const app = express();
const PORT = 5001;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/products', productRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});