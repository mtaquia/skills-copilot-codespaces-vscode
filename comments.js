// Create a web server that listens for requests on port 3000. The server should respond to GET requests for the path /comments with a JSON object that represents a list of comments. The list should have at least 3 comments in it. Each comment should have the following keys: id, username, comment.
// Example response:
// [
//   {
//     "id": 1,
//     "username": "user1",
//     "comment": "this is a comment"
//   },
//   {
//     "id": 2,
//     "username": "user2",
//     "comment": "this is another comment"
//   },
//   {
//     "id": 3,
//     "username": "user3",
//     "comment": "this is a third comment"
//   }
// ]
// You can use the express library to help you with this challenge. Here is an example of how you can use express to create a simple web server:

var express = require('express');
var app = express();

app.get('/comments', (req, res) => {
  res.json([
    {
      "id": 1,
      "username": "user1",
      "comment": "this is a comment"
    },
    {
      "id": 2,
      "username": "user2",
      "comment": "this is another comment"
    },
    {
      "id": 3,
      "username": "user3",
      "comment": "this is a third comment"
    }
  ]);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// To test your server, you can use the curl command in your terminal:
// curl http://localhost:3000/comments
// The curl command should return a JSON object that represents a list of comments.