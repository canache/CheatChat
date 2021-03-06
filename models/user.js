var mongoose = require('mongoose');
Schema = mongoose.Schema

UserSchema = new Schema({
	login: String,
	pseudo: String,
	password: String, 
	notifs: Boolean,
	sounds: Boolean
});


User = mongoose.model('User', UserSchema);

exports.User = User;
exports.UserSchema = UserSchema;