const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true
   },
   description: String
});

module.exports = mongoose.model('Item', ItemSchema);