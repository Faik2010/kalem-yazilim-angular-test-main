"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllItems = void 0;
var db_data_1 = require("./db-data");
function getAllItems(req, res) {
    console.log('Retrieving items data ...');
    setTimeout(function () {
        res.status(200).json({ payload: Object.values(db_data_1.ITEMS) });
    }, 1000);
}
exports.getAllItems = getAllItems;
