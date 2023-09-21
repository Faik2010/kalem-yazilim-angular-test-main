"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
var db_data_1 = require("./db-data");
function loginUser(req, res) {
    console.log('User login attempt ...');
    var _a = req.body, username = _a.username, password = _a.password;
    var user = (0, db_data_1.authenticate)(username, password);
    if (user) {
        res.status(200).json({ username: user.username, name: user.name, surname: user.surname, mobile: user.mobile });
    }
    else {
        res.sendStatus(403);
    }
}
exports.loginUser = loginUser;
