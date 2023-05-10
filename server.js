// Dependencies
// =============================================================
const compression = require('compression');
const express = require('express');

// Set up the Express App
// =============================================================
const app = express();
const port = process.env.PORT || 8082;

// Using compression npm to improve performance
app.use(compression());

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static/health-checker', express.static('applications/health-checker'))

app.listen(port, () => console.log(`Listening on port ${port}!`));
