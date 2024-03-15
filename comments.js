// Create web server
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const comments = require('./comments.js');
app.get('/comments', (req, res) => {
  res.json(comments);
});
app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.status(201).json(req.body);
});
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
// Path: comments.js
// Comments data
module.exports = [
  {
    id: 1,
    username: 'John',
    comment: 'Hello'
  },
  {
    id: 2,
    username: 'Amy',
    comment: 'Hi'
  }
];
```
- To run the web server, run the following command in the terminal:
```
node comments.js
```
- Open the browser and navigate to `http://localhost:3000/comments`. You should see the following JSON data:
```
[
  {
    "id": 1,
    "username": "John",
    "comment": "Hello"
  },
  {
    "id": 2,
    "username": "Amy",
    "comment": "Hi"
  }
]
```
- To add a new comment, you can use the `curl` command in the terminal:
```
curl -X POST -H "Content-Type: application/json" -d '{"id": 3, "username": "Bob", "comment": "Hey"}' http://localhost:3000/comments
```
- Open the browser and navigate to `http://localhost:3000/comments`. You should see the following JSON data:
```
[
  {
    "id": 1,
    "username": "John",
    "comment": "Hello"
  },
  {
    "id": 2,
    "username": "Amy",
    "comment": "Hi"
  },
  {
    "id": 3,
    "username": "Bob",
    "comment": "Hey"
  }
]
```
- To stop the web server, press `Ctrl + C` in the terminal.

##






