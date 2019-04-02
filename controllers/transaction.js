const Transaction = require('../models/transaction');

class Controller{
  static findAll(req, res) {
    Transaction.find({})
    .populate('member')
    .populate('booklist')
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }
  
  static findById(req, res) {
    Transaction.findById(req.params.id)
    .populate('member')
    .populate('booklist')
      .then(obj => {
        res.status(200).json(obj);
      })
      .catch(err => {
        res.status(500).json(err);
      })    
  }

  static create(req, res) {
    Transaction.create({
      member: req.body.member,
      in_date: new Date,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      fine: req.body.fine,
      booklist: req.body.booklist
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
    Transaction.findById(req.params.id)
      .then(obj => {
        object = obj;
        return obj.update({
          member: req.body.member,
          in_date: new Date,
          out_date: req.body.out_date,
          due_date: req.body.due_date,
          fine: req.body.fine,
          booklist: req.body.booklist
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
    Transaction.findByIdAndDelete(req.params.id)
      .then(obj => {
        res.status(200).json({ message: 'successfully deleted', obj});
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }
}


module.exports = Controller;