const express = require('express');
const categories = require('./data/categories.json');
const news = require('./data/news.json');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('hello from the other side after updated nodemon');
});
app.get('/categories', (req, res) => {
  res.send(categories);
});
app.get('/news', (req, res) => {
  res.send(news);
});
app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});
app.get('/categories/:id', (req, res) => {
  const id = req.params.id;
  if (id == 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => n.category_id === id);
    res.send(categoryNews);
  }
});
app.listen(port, () => {
  console.log('listening on port at', port);
});
