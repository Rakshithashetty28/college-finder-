const express = require("express");
const path = require("path");

const app = express();

// Middleware
app.use(express.static(__dirname));
app.use(express.json());

// Load JSON data
const colleges = require("./full_production_colleges_dataset.json");

// API Route
app.get("/api/colleges", (req, res) => {
    res.json(colleges);
});

// Port for Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});