// Require express
const express = require('express');
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Tell Node creating express server
const app = express();

// Declare PORT
const PORT = process.env.PORT || 8080;

// Set up express parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

// Routes
require(apiRoutes)(app);
require(htmlRoutes)(app);

// Set up PORT listener
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));