const transactions = require('express').Router();
const TransController = require('../../controllers/transaction');


transactions.get('/', TransController.findAll);
transactions.post('/', TransController.create);
transactions.get('/:id', TransController.findById);
transactions.put('/:id', TransController.update);
transactions.delete('/:id', TransController.delete);


module.exports = transactions;