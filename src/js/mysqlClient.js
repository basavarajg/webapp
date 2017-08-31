var mysql = require('mysql');
var sysDbConf  = require('./dbConf');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'sys'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});
cd ..
console.log('Connection established!');

connection.query('select * from sys.user;', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].username);
});

connection.end();
console.log('Connection closed!');
