// Load Modules
const express = require('express');
const ejs = require('ejs');

// Some consts
const PORT = 8080;

// Initialise Express
var app = express();

// Render Static Files
app.use(express.static('public'));

// Set view engine to ejs
app.set('view engine', 'ejs');

// Get routes
app.get('/', (req, res) => {
    const str = "This is coming from the server";
    res.render('pages/index', {
	str
    });
});

// Port
app.listen(PORT, () => {
    console.log(`Listining on port ${PORT}`);
});
