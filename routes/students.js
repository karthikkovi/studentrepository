const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Student = mongoose.model('students');

module.exports = (app) => {
	app.post('/api/students', requireLogin, async (req, res) => {
		const { studentid, name, sub1, sub2, sub3, sub4 } = req.body;

		const student = new Student({
			studentid,
			name,
			sub1,
			sub2,
			sub3,
			sub4,
			_user: req.user.id,
			dateCreated: Date.now(),
		});
		try {
			await student.save();
		} catch (error) {
			res.status(422).send(error);
		}

		res.send(student);
	});
};
