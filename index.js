const cors = require('cors');
const express = require('express');
const { getAllBooks, getBookById } = require('./controllers');

const app = express();
app.use(cors());
app.use(express.json());

//endpoint to get all books
app.get('/books', async (req, res) => {
  const books = getAllBooks();
  res.json({ books });
});

//endpoint to get a book details by id
app.get('/books/details/:id', async (req, res) => {
  let book = getBookById(parseInt(req.params.id));
  res.json({
    book,
  });
});

app.get('/', (req, res) => {
  res.send('BD6.6 - HW - 3');
});

module.exports = { app };
