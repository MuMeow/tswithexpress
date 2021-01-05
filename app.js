"use strict";
exports.__esModule = true;
exports.app = void 0;
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
exports.app = app;
app.use(bodyParser.json({
    limit: "50mb"
}));
app.get('/', function (req, res) {
    res.send("Meow!!!!!");
});
app.get('/:id/:meow', function (req, res) {
    res.send(req.params);
});
app.post('/', function (req, res) {
    res.send(req.body);
});
app.get('/health-check', function (req, res) {
    res.send({
        Status: "Online"
    });
});
