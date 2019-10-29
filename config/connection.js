//MySQL connection setup
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: DB_HOST,
    port: 3306,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
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