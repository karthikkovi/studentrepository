const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
	},
	studentid: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	sub1: {
		type: String,
	},
	sub2: {
		type: String,
	},
	sub3: {
		type: String,
	},
	sub4: {
		type: String,
	},
});

module.exports = Student = mongoose.model('student', ProfileSchema);
