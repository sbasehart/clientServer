var mongoose = require('mongoose'), Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema ({
    email: String,
    password: String,
    salt: String,
    isAdmin: Boolean,
    resetPassword: Boolean,
    clientId: { type: Schema.Types.ObjectId, ref: 'Client' },
    locationId: String,
});


module.exports = mongoose.model('User', UserSchema);


