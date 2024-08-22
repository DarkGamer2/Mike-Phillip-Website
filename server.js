const express = require('express');
require('dotenv').config();

const app = express();
const mainRoutes = require('./routes/mainRoutes');

// Middleware to serve static files
app.use(express.static("public"));

// JSON and URL-encoded middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use mainRoutes for /routes path
app.use('/routes', mainRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('An error occurred:', err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
