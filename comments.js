// Create web server
// 1. Create a new express server
// 2. Create a new route for GET requests to '/comments'
// 3. Create a new route for POST requests to '/comments'
// 4. Create a new route for DELETE requests to '/comments/:id'
// 5. Create a new route for PUT requests to '/comments/:id'
// 6. Add middleware to parse JSON request bodies
// 7. Start server on port 3000
// 8. Log 'Server is listening on port 3000'

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.send('GET request to the homepage');
});

app.post('/comments', (req, res) => {
  res.send('POST request to the homepage');
});

app.delete('/comments/:id', (req, res) => {
  res.send('DELETE request to the homepage');
});

app.put('/comments/:id', (req, res) => {
  res.send('PUT request to the homepage');
});

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});