'use strict';

var Promise = require('promise');
const Database = require('./database.js');

const query = 'select firstname, lastname from user where ?';
//const args = ['basu','basu'];

//const query = 'insert into user set ?';
const args = {
  username:'chavva.pratinya', 
  password: 'chavva'
};

var database = new Database();
database.query(query, args).then( rows => {
    console.log(rows);
});
database.close();
