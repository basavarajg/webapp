var client  = require('./mysqlClient');

client.executeQuery('select firstname from user where username=? and password=?', ['basu','basu']);
