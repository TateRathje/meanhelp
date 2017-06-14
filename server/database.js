var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/meanhelp", function(err) {
	if (err) {
		console.log('Failed connecting to Mongodb');
	} else {
		console.log('Successfully connected to Mongodb');
	}
});