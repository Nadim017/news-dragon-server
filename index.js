const express = require('express');
const categories = require('./data/categories.json');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('hello from the other side after updated nodemon');
});
app.get('/category', (req, res) => {
  res.send(categories);
});
app.listen(port, () => {
  console.log('listening on port at', port);
});
