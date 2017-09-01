'use strict';

const mysql = require('mysql');
var Promise = require('promise');

const conf = {
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'sys'
};


module.exports = class Database {
    constructor() {
        this.connection = mysql.createConnection(conf);
    }
    query(sql, args) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err)
                    return reject( err );
                resolve(rows);
            });
        });
    }
    close() {
        return new Promise((resolve, reject) => {
            this.connection.end( err => {
                if (err)
                    return reject(err);
                resolve();
                console.log('Connection closed!');
            });
        });
    }
}
