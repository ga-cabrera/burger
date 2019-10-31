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

app.post('/api/burgers', function(req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        //send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

app.put('/api/burgers/:id', function(req, res) {
    var condition = `id = ${req.params.id}`;

    console.log('condition', condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // if now rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

app.delete('/api/burgers/:id', function(req, res) {
    var condition = `id = ${req.params.id}`;

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            // if no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// export routes for server.js to use
module.exports = app;