const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const errorHandler = require('./Middleware/errorHandler');
const userRoutes = require('./Routes/userRoutes');
const adminRoutes = require('./Routes/adminRoutes');
const productRoutes = require('./Routes/productRoutes');

dotenv.config();

const app = express();

app.use(express.json());
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/eCDB')
.then(()=> console.log('MongooseDB conncted'))
.catch(err => console.error('connection error',err));

// Routes
app.use('/api/auth', userRoutes);       // For user authentication
app.use('/api/admin', adminRoutes);     // For admin operations
app.use('/api/products', productRoutes);  // For product operations

// Error handling middleware (should be the last piece of middleware)
app.use(errorHandler);
;
app.listen(3000,console.log('listening on port 3000'));