const mongoose = require('mongoose');
const { Schema } = mongoose;
// const markSchema = require('./Marks');

const studentSchema = new Schema({
	studentid: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	sub1: String,
	sub2: String,
	sub3: String,
	sub4: String,
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	dateCreated: Date,
});

mongoose.model('students', studentSchema);
