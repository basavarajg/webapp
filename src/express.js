var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var util = require('util');

var app = express();
//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.static('./css/'));
//app.use(express.static('./js/'));
app.use(express.static('../dist/'));

//Store all HTML files in view folder.
//app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/login.html');
    //res.render('index', {title: 'Home', message: 'Hellow World from Jade'});
});

app.post('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html');

  //mimic a slow network connection
  setTimeout(function(){
    console.log(req.body.firstName);
    res.send(JSON.stringify(req.body.firstName));
  }, 1000)
    //res.render('index', {title: 'Home', message: 'Hellow World from Jade'});
});

app.route('/register')
  .get(function (req, res) {
    res.sendFile(__dirname + '/html/register.html')
})
.post(function (req, res) {
    if (!req.body)
      return res.sendStatus(400)
    console.dir(req.body);
    res.send(req.body);
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});
