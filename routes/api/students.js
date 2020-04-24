var express = require('express');
var router = express.Router();
var Students = require('../../models/students');

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.json({ type: 'students', success: true });
});
router.get('/signup', function (req, res, next) {
	res.json({ type: 'students', success: false });
});
router.post('/signup', (req, res, next) => {
	Students.create(req.body, (err, createdUser) => {
		if (err) return next(err);
		console.log(createdUser);
	});
});
router.post('/login', (req, res) => {
	console.log(req.user);
	var { email, password } = req.body;
	console.log(req.body);
	Students.findOne({ email }, (err, user) => {
		if (err) return res.json({ type: 'students', success: false });
		if (!user) return res.json({ type: 'students', success: false });
		if (!user.verifyPassword(password)) return res.json({ type: 'students', success: false });
		res.json({ type: 'students', success: true });
	});
});

module.exports = router;
