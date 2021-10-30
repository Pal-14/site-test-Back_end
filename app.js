const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const dbadress = process.env.DB || "mongodb://localhost:27017/test";

mongoose.connect(dbadress);

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app; 
