const members = require('express').Router();
const MemberController = require('../../controllers/member');


members.get('/', MemberController.findAll);
members.post('/', MemberController.create);
members.get('/:id', MemberController.findById);
members.put('/:id', MemberController.update);
members.delete('/:id', MemberController.delete);


module.exports = members;