var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Import Mongoose
let mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Require Routes file
var mentorsRouter = require('./routes/api/mentors');
var studentsRouter = require('./routes/api/students');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Use All Routes
app.use('/api/v1/mentors', mentorsRouter);
app.use('/api/v1/students', studentsRouter);

// mongodb connection
mongoose.connect('mongodb://localhost/alt', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	console.log(err ? err : 'Database connected');
});

module.exports = app;
