const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const { Schema } = mongoose;


const transactionSchema = new Schema({
  member: {
    type: Schema.Types.ObjectId,
    ref: 'Member'
  },
  in_date: Date,
  out_date: Date,
  due_date: Date,
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
})

transactionSchema.pre('save', function(next) {
  let secsDif = (new Date(this.in_date).getTime() - new Date(this.due_date).getTime()) / 1000;
  let daysDif = Math.floor(secsDif / (3600 * 24))
  this.fine = 1000 * daysDif;
  next();
})

let Transaction = mongoose.model('Transaction', transactionSchema);


module.exports = Transaction;