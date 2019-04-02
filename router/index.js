const router = require('express').Router();
const books = require('./books');
const members = require('./members');
const transactions = require('./transactions');


router.use('/books', books);
router.use('/members', members);
router.use('/transactions', transactions);


module.exports = router