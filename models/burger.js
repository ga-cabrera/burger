// importing orm to create functions that will interact with database
var orm = require("../config/orm");

var burger = {
    all: function(callback) {
        orm.all('burgers', function(result) {
            callback(result);
        });
    },
    create: function(cols, vals, callback) {
        orm.create('burgers', cols, vals, function(result) {
            callback(result);
        });
    },
    update: function(objColVals, condition, callback) {
        orm.update('burgers', objColVals, condition, function(result) {
            callback(result);
        });
    },
    delete: function(condition, callback) {
        orm.delete('burgers', condition, function(result) {
            callback(result);
        });
    }
};

// exporting database functions for the controller (burgers_controller.js)
module.exports = burger;