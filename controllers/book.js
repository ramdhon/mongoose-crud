const Book = require('../models/book');

class Controller{
  static findAll(req, res) {
    Book.find({})
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }
  
  static findById(req, res) {
    Book.findById(req.params.id)
      .then(obj => {
        res.status(200).json(obj);
      })
      .catch(err => {
        res.status(500).json(err);
      })    
  }

  static create(req, res) {
    Book.create({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })
      .then(obj => {
        res.status(201).json({ message: 'sucessfully created', obj});
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }

  static update(req, res) {
    let object = null;
    Book.findById(req.params.id)
      .then(obj => {
        object = obj;
        return obj.update({
          isbn: req.body.isbn,
          title: req.body.title,
          author: req.body.author,
          category: req.body.category,
          stock: req.body.stock
        })
      })
      .then(() => {
        res.status(201).json({ message: 'successfully updated', object});
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }

  static delete(req, res) {
    Book.findByIdAndDelete(req.params.id)
      .then(obj => {
        res.status(200).json({ message: 'successfully deleted', obj});
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }
}


module.exports = Controller;