const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
require('dotenv').config(); // Add this to load the .env variables

const app = express();
app.use(cors());
app.use(express.json());

// Use the MongoDB connection string from the .env file
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB atlas'))
  .catch(err => console.error('❌ DB Error:', err));

app.use('/students', studentRoutes);

app.get('/', (req, res) => {
  res.send('🎉 Student Management System Backend is Running!');
});

const PORT = process.env.PORT || 5000; // You can use a different port if needed
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
