const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const express = require('express');
const router = express.Router();
const Student = require('../models/Students');

router.post('/', requireLogin, async (req, res) => {
	console.log(req.body);
	const { studentid, name, sub1, sub2, sub3, sub4 } = req.body;
	const studentFields = {};

	studentFields.studentid = studentid;
	studentFields.name = name;
	if (sub1) studentFields.sub1 = sub1;
	if (sub2) studentFields.sub2 = sub2;
	if (sub3) studentFields.sub3 = sub3;
	if (sub4) studentFields.sub4 = sub4;

	try {
		let student = Student(studentFields);
		await student.save();

		res.json(student);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
