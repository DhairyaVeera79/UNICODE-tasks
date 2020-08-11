var express = require('express');
var bodyParser = require('body-parser');  
var app = express();
var http = require('http');

const hostname = 'localhost';
const port = 8088;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var students = [];

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('form', {qs: req.query}); 
});

app.get('/success', function(req, res){
  res.render('success', {qs: req.query}); 
  res.send(students);
});

app.post('/', urlencodedParser, function(req, res){
  if(req.body.showAllSudents){
    res.redirect('/success');
    res.sendfile
  }
  else{
    var student = {
      "name": req.body.firstName + " " + req.body.lastName,
      "score": {
        "maths": Number(req.body.maths),
        "english": Number(req.body.english)
      }
    };
    var average = (Number(req.body.maths) + Number(req.body.english))/2;
    var l = students.length;
    console.log(student);
    if(l == 0){
      students.push(student);
    }
    else{
      //loop to access all the elements currently present in output list
      for(var j = 0; j < l; j++){ 
        current_average = (students[j].score.maths + students[j].score.english)/2;
        if(average > current_average){
          students.splice(j, 0, student);
          break;
        }
        if(j == l-1){
          students.push(student);
        }
    }
  }
}
res.render('form', {qs: req.query});
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});