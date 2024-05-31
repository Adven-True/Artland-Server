/* user order */
var express = require('express');
var router = express.Router();
var orderService = require('../services/orderservice')

/* return data */
const { ResponseData } = require("../utils/responseData")

const orderController = {
  addOrder: function (req, res, next) {
    var order = req.body;//requesbody
    console.log(order);
    orderService.Add(order,
      function (err, data, fields) {
        if (err) {
          res.status(200).json(ResponseData(400, null, err));
        } else {
          res.status(200).json(ResponseData(0, null, "purchase succeed"));
        }
      });
  },
  findUserOrder: function (req, res, next) {
    var order = req.body;//requestbody
    orderService.Userorder(order,
      function (err, data, fields) {
        if (err) {
          res.status(200).json(ResponseData(400, data, err));
        } else {
          res.status(200).json(ResponseData(0, data, "data access succeed"));
        }
      });
  },
  getAllOrders: function (req, res, next) {
    var order = req.body;//requestbody
    orderService.Showorder(order,
      function (err, data, fields) {
        if (err) {
          res.status(200).json(ResponseData(400, null, err));
        } else {
          res.status(200).json(ResponseData(0, data, "data access succeed"));
        }
      });
  }
}

module.exports = orderController;