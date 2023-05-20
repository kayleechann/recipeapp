import mysql from "mysql"

// export const db=mysql.createConnection({
//     connectionLimit: 100,
//     host: 'localhost',
//     user:"root",
//     password:"cpsc408",
//     port: '3306',
//     database:"Recipe",
//     _socket: '/var/run/mysqld/mysqld.sock',
// });


//const mysql = require('mysql');

// export var db = mysql.createConnection({
//     connectionLimit : 100, //important
//     host     : 'localhost',
//     user     : 'root',
//     password : 'cpsc408',
//     database : 'Recipe',
//     debug    :  false
// });

const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : 'cpsc408',
  database: 'Recipe'
});

// simple query
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// with placeholder
connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function(err, results) {
    console.log(results);
  }
);


