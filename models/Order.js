var mongoose = require('mongoose'), Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema ({
  _id: String,
  customerId: String,
  salesPerson: String,
  status: String,
  soNumber: Number,
  itemCount: Number,
  items: { type: Schema.Types.ObjectId, ref: 'Item' },
  orderDate: Date,
  pickupDate: Date,
  deliverDate: Date,
  orderAmount: Number,
  receiptImageLocation: String,
  receiptNotes: String,
  rating: any,
  clientId: String,
  clientLocationId: String,
  isPickedUp: Boolean,
  isDelivered: Boolean,
});


module.exports = mongoose.model('Order', OrderSchema);