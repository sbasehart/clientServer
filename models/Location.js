var mongoose = require('mongoose'), Schema = mongoose.Schema;

var LocationSchema = new mongoose.Schema ({
    _id: String,
    name: String,
    storeNumber: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
    phone1: String,
    phone2: String,
    contact: String,
    email: String,
    addedDate: Date,
    removedDate: Date,
    notes: String,
    active: Boolean,
    clientId: { type: Schema.Types.ObjectId, ref: 'Client' },
});


module.exports = mongoose.model('Location', LocationSchema);

