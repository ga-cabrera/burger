//import mySQL connection
var connection = require('./connection');

//creating helpter function that helps with MySQL syntax.
//AKA, helps with adding our question marks (?) as strings
function questionMark(num) {
    var array = [];
    
    for (i = 0; i < num; i++) {
     array.push('?');
    }
    return array.toString();
};

//creating another helper function that converts object key/value pairs into MYSQL syntax
function obToSql(ob) {
    var array = [];

    //looping through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties 
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
              value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
          }
    }
     // translate array of strings to a single comma-separated string
     return arr.toString();
} 

var orm = {
    all: function(tableInput, cb) {
        var qString = `SELECT * FROM ${tableInput};`;
        connection.query(qString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
}