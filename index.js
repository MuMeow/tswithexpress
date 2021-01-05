"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var server = app_1.app.listen(10800, "0.0.0.0", function () {
    var _a = server.address(), port = _a.port, address = _a.address;
    console.log("service listening on :", "http://" + address + ":" + port);
});
