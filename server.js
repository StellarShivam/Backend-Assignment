const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cryptoRoutes = require("./routes/crypto.route");
const cryptoController = require("./controllers/cryptp.controller");
const cron = require("node-cron");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // Database connection configuration

const app = express();
// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware for parsing JSON requests
app.use(bodyParser.json());

cron.schedule("0 */2 * * *", async () => {
  console.log("Running scheduled job to fetch cryptocurrency data...");
  await cryptoController.fetchCryptoData();
});

app.get("/", (req, res) => {
  res.send(`<h1>It's Shivam, The KoniX app is running!</h1>`);
});

//directs to crypto routes
app.use("/", cryptoRoutes);

// Error-handling middleware
app.use((error, req, res, next) => {
  console.error("Error:", error);
  res.status(500).json({ success: false, error: "Internal server error" });
});

// Define the port for the server
const PORT = process.env.PORT || 3002;

// Start the server and listen for incoming requests
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
