const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const { Schema } = mongoose;


const memberSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name required']
  },
  address: String,
  zipcode: String,
  email: {
    type: String, 
  },
  phone: {
    type: String,
    validate: {
      validator: function(value) {
        return (value.length >= 11 && value.length <= 13)
      },
      message: 'phone invalid length between 11 and 13'
    }
  }
})

memberSchema.path('email').validate(function(value) {
  return /[\w-]+@([\w-]+\.)+[\w-]+/gi.test(mail);
}, 'mail is not valid')

memberSchema.path('email').validate(function(value) {
  return Member.findOne({ email: value })
    .then(obj => {
      if (obj) return false
    })
    .catch(err => {
      throw err;
    })
}, 'mail is not unique')


let Member = mongoose.model('Member', memberSchema);


module.exports = Member;