//MySQL connection setup
require('dotenv').config();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

//create connection
connection.connect(function(err) {
    if (err) {
        console.log('error connecting: \n' + err.stack);
    }
    console.log('connected as ID: ' + connection.threadId);
});

// export connection for our ORM to use
module.exports = connection;