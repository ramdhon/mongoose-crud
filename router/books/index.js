const books = require('express').Router();
const BookController = require('../../controllers/book');


books.get('/', BookController.findAll);
books.post('/', BookController.create);
books.get('/:id', BookController.findById);
books.put('/:id', BookController.update);
books.delete('/:id', BookController.delete);


module.exports = books;