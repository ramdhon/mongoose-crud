const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const { Schema } = mongoose;


const bookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
})

let Book = mongoose.model('Book', bookSchema);


module.exports = Book;