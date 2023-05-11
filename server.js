// Dependencies
// =============================================================
const compression = require('compression');
const express = require('express');

// Set up the Express App
// =============================================================
const app = express();
const port = process.env.PORT || 8082;

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 10, // maximum requests from IP address
    standardHeaders: true,
    legacyHeaders: false
})

// Using compression npm to improve performance
app.use(compression());

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(limiter)

app.disable('x-powered-by')

app.use('/static/health-checker', express.static('applications/health-checker'))

app.listen(port, () => console.log(`Listening on port ${port}!`));
