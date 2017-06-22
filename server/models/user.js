var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var UserSchema = new mongoose.Schema({
		email: {
			type: String,
			unique: true,
			required: true,
			trim: true
		},
		userName: {
			type: String,
			required: true,
			trim: true
		},
		password: {
			type: String,
			required: true
		}
});

//hash password before saving to datebase
UserSchema.pre('save', function(next) {
	var user = this;
	bcrypt.hash(user.password, 10, function(err, hash) {
		if (err) {
			return next(err);
		}
		user.password = hash;
		next();
	})
});

var User = mongoose.model('User', UserSchema);

module.exports = User;