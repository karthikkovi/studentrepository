const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Student = mongoose.model('students');

module.exports = (app) => {
	app.get('/api/students', requireLogin, async (req, res) => {
		const students = await Student.find({ _user: req.user.id });

		res.send(students);
	});
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
			let student = await Student.findOne({ studentid: studentid });

			if (student) {
				student = await Student.findOneAndUpdate(
					{ studentid: studentid },
					{ $set: studentFields },
					{ new: true }
				);

				return res.json(student);
			}

			// Create Profile

			student = new Student(studentFields);

			await student.save();

			res.json(student);
		} catch (error) {
			console.error(error.message);
			res.status(500).send('Server Error');
		}
	});
};
