const mongoose = require('mongoose');

const uri = "mongodb+srv://admin01:admin01@cluster0.vryzw.mongodb.net/contactdb?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected successfully!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
