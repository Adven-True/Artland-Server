var userService = require('../services/userservice')
var express = require('express');
var router = express.Router();
/* set current token */
var Token = require('../utils/token');
/* password encryption and decryption methods */
const { genPassword,
  exportPassword } = require('../utils/cryp')
/* return data */
const { ResponseData } = require("../utils/responseData")

const userAccountController = {
  getUserList: function (req, res, next) {
    res.render("index");
  },
  register: function (req, res, next) {
    var user = req.body;
    userService.Register(user,
      function (error, data, fields) {
        if (error) {
          res.status(400).json(ResponseData(400, null, error));
        }
        console.log(data);
        if (data.length == undefined) {
          res.status(200).json(ResponseData(0, data, "register success"));
        } else {
          res.status(200).json(ResponseData(400, null, "user exists"));
        }
      });
  },
  login: function (req, res, next) {
    var user = req.body;//requestbody
    userService.Login(user,
      function (err, data, fields) {
        if (err) {
          res.status(200).json(ResponseData(400, null, err));
        } else {
          if (data.length != 1) {
            res.status(200).json(ResponseData(400, null, "username or password is error"));
          } else {

            const tokenStr = Token.encrypt(data[0]);
            res.json(ResponseData(0, {
              email: data[0].email,
              id: data[0].id,
              username: data[0].username,
              mobile: data[0].mobile,
              token: tokenStr
            }, "login success"));
          }
        }
      });
  },
  userState: function (req, res, next) {
    if (req.headers.authorization != '') {
      let userinfo = Token.decrypt(req.headers.authorization);
      console.log(req.headers.authorization)
      /* decrypt password, return and display */
      userinfo.data.userdata.password = exportPassword(userinfo.data.userdata.password);
      res.json(ResponseData(0, userinfo, "access user info succeed"));
    } else {
      res.json(ResponseData(0, null, "user need to login"));
    }
  },
  showList: function (req, res, next) {
    userService.showlist({},
      function (err, data, fields) {
        if (err) {
          res.status(200).json(ResponseData(400, null, err));
        } else {
          res.status(200).json(ResponseData(0, data, "obtain list succeed"));
        }
      });

  }
}

module.exports = userAccountController;