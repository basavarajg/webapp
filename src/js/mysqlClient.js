'use strict';

var Promise = require('promise');
const Database = require('./database.js');

//const query = 'select firstname from user where username=? and password=?';
//const args = ['basu','basu'];

const query = 'insert into user set ?';
const args = {
  username:'basavarajg', 
  password: 'password', 
  firstname: 'Basavaraj',
  lastname: 'Goudappanavar',
  middlename: 'S'
};

var database = new Database();
database.query(query, args).then( rows => {
    console.log(rows);
});
database.close();
