const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Example User Routes
const userRoutes = require("./routes/userRoutes");  // Ensure this file exists
app.use("/users", userRoutes); 

// Default Route
app.get("/", (req, res) => {
    res.send("User Management API is running...");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
