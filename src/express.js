var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var util = require('util');
var Promise = require('promise');
const Database = require('./js/database.js');

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

app.route('/login')
  .get(function (req, res) {
    res.sendFile(__dirname + '/html/login.html');
})
.post(function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  if (!req.body)
    return res.sendStatus(400)
  //console.dir(req.body);
  var database = new Database();
  const query = 'select * from user where username=? and password=?';
  var args = [req.body.username, req.body.password];
  console.log(args);
  var welcomeMsg = 'Welcome '
  database.query(query, args).then( rows => {
      if(0===rows.length) {
        database.close();
        return res.send('Incorrect Username/Password');
      }
      else{
        welcomeMsg+=rows[0].firstname + ' ' + rows[0].middlename + ' ' + rows[0].lastname;
      }


  }).then(() => {
    database.close().then(() => {
      res.send(welcomeMsg);
    });
  });
});

app.route('/register')
  .get(function (req, res) {
    res.sendFile(__dirname + '/html/register.html')
})
.post(function (req, res) {
    if (!req.body)
      return res.sendStatus(400)
    //console.dir(req.body);
    var database = new Database();
    const query = 'insert into user set ?';
    var args = req.body;

    database.query(query, args).then( rows => {
        console.log(rows);
    }).then(() => {
      database.close().then(() => {
        res.send('Date insterted successfully!');
      });
    });
});

app.get('/aboutus', function (req, res) {
    res.sendFile(__dirname + '/html/aboutus.html');
    //res.render('index', {title: 'Home', message: 'Hellow World from Jade'});
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});
