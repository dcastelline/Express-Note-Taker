// Require fs and express
const fs = require('fs');
const express = require('express');

// Tell Node creating express server
const app = express();

// Declare PORT
const PORT = process.env.PORT || 8080;

// Set up express parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));

// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Set up PORT listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});