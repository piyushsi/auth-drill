var express = require('express');
var router = express.Router();
var Mentor = require('../../models/mentors');

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.json({ type: 'mentors', success: true });
});

router.post('/process', (req, res, next) => {
	Mentor.create(req.body, (err, createdUser) => {
		if (err) return next(err);
		console.log(createdUser);
	});
});

module.exports = router;
