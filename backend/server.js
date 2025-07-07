require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Base route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// API routes
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
})
.catch(err => console.error('❌ MongoDB connection error:', err));

mongoose.connection.on('connected', () => console.log('Mongoose connected'));
mongoose.connection.on('error', (err) => console.error('Mongoose connection error:', err));
mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'));
