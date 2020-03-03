var mongoose = require('mongoose'), Schema = mongoose.Schema;

var ClientSchema = new mongoose.Schema ({
    _id: String,
    name: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
    phone1: String,
    phone2: String,
    email: String,
    joinedDate: Date,
    leftDate: Date,
    notes: String,
});


module.exports = mongoose.model('Client', ClientSchema);