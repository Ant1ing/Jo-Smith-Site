// Import necessary packages
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// Import utility function to connect to the database
import connectDB from './config/db.js';

// Load environment variables from a .env file
dotenv.config();

// Define the port for the server to listen on
const port = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Create an instance of the Express application
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Middleware to parse incoming URL-encoded data
app.use(express.urlencoded({extended: true}));

// Middleware to parse cookies
app.use(cookieParser());

// Middleware for body-parser
app.use(bodyParser.json());

// Create Schema
const emailSchema = new mongoose.Schema({
  email: { type: String, required: true }
});

// Create Model
const Email = mongoose.model('Email', emailSchema);

// Routes
app.post('/subscribe', async (req, res) => {
  const newEmail = new Email({
    email: req.body.email
  });

  try {
    const email = await newEmail.save();
    res.status(201).json(email);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Define a route that sends "Hello World" as a response
app.get("/", (req, res) => {
    res.send("welcome to the server!");
})

// Start the server and listen on the defined port
app.listen(port, () => console.log(`server running on port: ${port}`));