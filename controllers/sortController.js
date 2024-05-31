var sortService = require('../services/sortservice')
var express = require('express');
var router = express.Router();
var multer = require('multer')
const path = require('path');
/* return data */
const { ResponseData } = require("../utils/responseData")

const sortController = {
  sort: function (req, res, next) {
    sortService.List({}, function (err, data, fields) {
      if (err) {
        res.json(ResponseData(400, null, err));
      } else {
        res.json(ResponseData(0, data, "list access succeed"));
      }
    });
  }
}
module.exports = sortController;