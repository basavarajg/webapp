const mysql = require('mysql');

const sysDbConf = {
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'sys'
};

exports.establishConnection = function() {
  
  var connection = mysql.createConnection(sysDbConf);

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

  return connection;
}

exports.closeConnection = function(connection) {
  connection.end();
  console.log('Connection closed!');
}
