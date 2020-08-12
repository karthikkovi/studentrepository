const mongoose = require('mongoose');
const { Schema } = mongoose;

const markSchema = new Schema({
	sub1: String,
	sub2: String,
	sub3: String,
	sub4: String,
});

module.exports = markSchema;
