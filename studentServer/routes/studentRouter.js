const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const students = require('../models/students');

const studentRouter = express.Router();

studentRouter.use(bodyParser.json());

studentRouter.route('/')
.get((req,res,next) => {
    students.find({})
    .then((students) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(students);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    students.create(req.body)
    .then((student) => {
        console.log('student Created ', student);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(student);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = studentRouter;