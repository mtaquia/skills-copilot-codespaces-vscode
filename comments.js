// Create a web server

// Import the express module
var express = require('express');

// Create an instance of the express server
var app = express();

// Listen to the root URL
app.get('/', function(req, res) {
    res.send('Hello World');
});

// Listen to the /comments URL
app.get('/comments', function(req, res) {
    res.send('This is the comments page');
});

// Start the server
app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});