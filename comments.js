// Create web server
// Run web server
// Go to URL: http://localhost:3000/
// Check the console for the log
// Check the network tab for the request

// Import the required modules
const express = require('express');
const app = express();
const path = require('path');
const comments = require('./comments');

// Set up the middleware
app.use(express.json());
app.use(express.static('public'));

// Route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Route to get a comment by ID
app.get('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  if (comment) {
    res.json(comment);
  } else {
    res.sendStatus(404);
  }
});

// Route to add a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  if (comment && comment.username && comment.message) {
    comment.id = comments.length + 1;
    comments.push(comment);
    res.status(201).json(comment);
  } else {
    res.sendStatus(400);
  }
});

// Route to update a comment by ID
app.put('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  if (comment) {
    Object.assign(comment, req.body);
    res.json(comment);
  } else {
    res.sendStatus(404);
  }
});

// Route to delete a comment by ID
app.delete('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = comments.findIndex((comment) => comment.id === id);
  if (index !== -1) {
    comments.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started');
});