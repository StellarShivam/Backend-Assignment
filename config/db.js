const mongoose = require("mongoose");

// Asynchronous function to connect to MongoDB
const connectDB = async () => {
  try {
    // Attempt to connect to the database using the URI from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);

    process.exit(1);
  }
};

module.exports = connectDB;
