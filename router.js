"use strict";
exports.__esModule = true;
exports.app = void 0;
var express = require("express");
var bodyParser = require("body-parser");
var controller_1 = require("./services/cat/controller/controller");
var app = express();
exports.app = app;
app.use(bodyParser.json({
    limit: "25mb"
}));
app.use('/cat', controller_1.CatController);
app.get('/health-check', function (req, res) {
    res.send({
        Status: "Online"
    });
});
