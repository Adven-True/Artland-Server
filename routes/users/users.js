var express = require('express');
var router = express.Router();
var userInfoController = require('../../controllers/userInfoController')
/* set current token */
var Token = require('./../../utils/token');
/* password encryption and decryption methods */
const { genPassword,
  exportPassword } = require('./../../utils/cryp')
/* return data */
const { ResponseData } = require("./../../utils/responseData")
/* get all the user info */
router.get('/', userInfoController.getAllUserInfo);
/* add user info */
router.post('/', userInfoController.addUserInfo);
/* update info */
router.put('/:id', userInfoController.updateUserInfo);
/* delete user */
router.delete('/:id', userInfoController.deleteUser);
/* get user info by id */
router.get('/:id', userInfoController.getUserInfoById);
/* user basic info interface(jwt) */
router.get('/userstate', userInfoController.userBasicInfo);

module.exports = router;
