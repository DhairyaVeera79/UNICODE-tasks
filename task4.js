var express = require('express');
var bodyParser = require('body-parser');  
var app = express();
var http = require('http');

const hostname = 'localhost';
const port = 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
const mongoose = require('mongoose');

const students = require('./models/students');

const url = 'mongodb://localhost:27017/students';
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

    app.get('/', function(req, res){
        res.render('form', {qs: req.query}); 
    });
    
    app.post('/', urlencodedParser, function(req, res){
        if(req.body.submit){

            students.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                mathScore: Number(req.body.maths),
                englishScore: Number(req.body.english)
            })
            .then((student) => {
                console.log(student);
                
                return students.find({}).exec();
            })
            .catch((err) => {
                console.log(err);
            });
        }
        res.render('form', {qs: req.query});
    });
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});