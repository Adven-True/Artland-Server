var express = require('express');
var router = express.Router();
var userService = require('../services/userservice')
/* set current token */
var Token = require('../utils/token');
/* password encryption and decryption methods */
const { genPassword,
  exportPassword } = require('../utils/cryp')
/* return data */
const { ResponseData } = require("../utils/responseData")

const userInfoController = {
  getAllUserInfo: function (req, res, next) {
    userService.showlist({},
      function (err, data, fields) {
        if (err) {
          res.status(200).json(ResponseData(400, null, err));
        } else {
          res.status(200).json(ResponseData(0, data, "access info succeed"));
        }
      });
  },
  addUserInfo: function (req, res, next) {
    var user = req.body;
    userService.AddUser(user,
      function (err, data, fields) {
        if (err) {
          res.status(200).json(ResponseData(400, null, err));
        } else {
          res.status(200).json(ResponseData(0, data, "add user succeed"));
        }
      });
  },
  updateUserInfo: function (req, res, next) {
    var user = req.body;
    userService.ChangeUser({ ...user, id: req.params.id },
      function (err, data, fields) {
        if (err) {
          res.status(200).json(ResponseData(400, null, err));
        } else {
          user.password = genPassword(user.password)
          const tokenStr = Token.encrypt(user);
          res.status(200).json(ResponseData(0, {
            email: user.email,
            id: user.id,
            username: user.username,
            mobile: user.mobile,
            token: tokenStr
          }, "update succeed"));
        }
      });
  },
  deleteUser: function (req, res, next) {
    userService.DeleteUser({ 'id': req.params.id },
      function (err, data, fields) {
        if (err) {
          res.status(200).json(ResponseData(400, null, err));
        } else {
          res.status(200).json(ResponseData(0, data, "delete succeed"));
        }
      });
  },
  getUserInfoById: function (req, res, next) {
    var user = req.params;
    console.log(user)
    userService.getUser(user,
      function (err, data, fields) {
        if (err) {
          res.status(200).json(ResponseData(400, null, err));
        } else {
          res.status(200).json(ResponseData(0, data, "access succeed"));
        }
      });
  },
  userBasicInfo: function (req, res, next) {
    let userinfo = Token.decrypt(req.headers.authorization);
    /* decrypt password, return and display */
    userinfo.data.userdata.password = exportPassword(userinfo.data.userdata.password);
    res.json(ResponseData(0, userinfo, "access user info succeed"));
  }
}

module.exports = userInfoController;