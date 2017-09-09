var express = require('express');
var http = require('http');
var path = require('path');
var util = require('util');

var app = express();

//app.use(express.static('./css/'));
//app.use(express.static('./js/'));
app.use(express.static('../dist/'));

//Store all HTML files in view folder.
//app.set('view engine', 'jade');

function rawBody(req, res, next) {

}

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/login.html');
    //res.render('index', {title: 'Home', message: 'Hellow World from Jade'});
});

app.route('/register')
  .get(function (req, res) {
    res.sendFile(__dirname + '/html/register.html')
  })
  .post(function (req, res) {
    req.setEncoding('utf8');
    req.rawBody = '';
    req.on('data', (chunk) => {
      console.dir(chunk);
      req.rawBody += chunk;
    });
    req.on('end', () => console.log('request body is: '+req.rawBody));
    //setTimeout(()=>console.log(req.rawBody),5000);
    res.send('got it');
  });

app.listen(3000, function () {
  console.log('GMap listening on port 3000!')
});
