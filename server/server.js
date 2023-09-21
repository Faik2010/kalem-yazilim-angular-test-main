"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var get_courses_route_1 = require("./get-courses.route");
var auth_route_1 = require("./auth.route");
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.route('/api/login').post(auth_route_1.loginUser);
app.route('/api/products').get(get_courses_route_1.getAllItems);
var httpServer = app.listen(9000, function () {
    console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
