// importing burger model to use its database
var burger = require('../models/burger');
var express = require('express');
var app = express();

//create all our routes and set up logic within those routes where required
app.get('/', function(req, res) {
    burger.all(function(data) {
        var barsObject = {
            burgers: data
        };

        console.log(barsObject);
        res.render('index', barsObject);
    });
});