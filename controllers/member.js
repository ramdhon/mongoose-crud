const Member = require('../models/member');

class Controller{
  static findAll(req, res) {
    Member.find({})
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }
  
  static findById(req, res) {
    Member.findById(req.params.id)
      .then(obj => {
        res.status(200).json(obj);
      })
      .catch(err => {
        res.status(500).json(err);
      })    
  }

  static create(req, res) {
    Member.create({
      name: req.body.name,
      address: req.body.address,
      zipcode: req.body.zipcode,
      email: req.body.email,
      phone: req.body.phone
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
    Member.findById(req.params.id)
      .then(obj => {
        object = obj;
        return obj.update({
          name: req.body.name,
          address: req.body.address,
          zipcode: req.body.zipcode,
          email: req.body.email,
          phone: req.body.phone
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
    Member.findByIdAndDelete(req.params.id)
      .then(obj => {
        res.status(200).json({ message: 'successfully deleted', obj});
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }
}


module.exports = Controller;