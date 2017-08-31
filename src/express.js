var express = require('express')
var app = express()

//app.use(express.static('./css/'));
//app.use(express.static('./js/'));
app.use(express.static('../dist/'));

//Store all HTML files in view folder.
//app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/login.html');
    //res.render('index', {title: 'Home', message: 'Hellow World from Jade'});
});

app.get('/register', function (req, res) {
    res.sendFile(__dirname + '/html/register.html');
    //res.render('index', {title: 'Home', message: 'Hellow World from Jade'});
});

app.get('/aboutme', function (req, res) {
    res.sendFile(__dirname + '/html/aboutme.html');
    //res.render('index', {title: 'Home', message: 'Hellow World from Jade'});
});

app.get('/maps', function (req, res) {
    res.sendFile(__dirname + '/html/map.html');
    //res.render('index', {title: 'Home', message: 'Hellow World from Jade'});
});

app.listen(3000, function () {
  console.log('GMap listening on port 3000!')
});
