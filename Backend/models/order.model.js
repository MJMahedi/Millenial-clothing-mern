const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {

  },
  basket: [

  ],
  shippingCost: {
    type: Number,
    required: true,
  },
  // address: {

  // },
  address: {
    // phone: {
    //   type: String,
    //   required: true
    // },
    // house: {
    //   type: String,
    //   required: true
    // },
    // street: {
    //   type: String,
    //   required: true
    // },
    // city: {
    //   type: String,
    //   required: true
    // },
    // postalCode: {
    //   type: String,
    //   required: true
    // }
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending',
  },
  orderDate: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Order', OrderSchema);
