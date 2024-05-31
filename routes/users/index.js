var userAccountController = require('./../../controllers/userAccountController')
var express = require('express');
var router = express.Router();
/* set current token */
var Token = require('./../../utils/token');
/* password encryption and decryption methods */
const { genPassword,
  exportPassword } = require('./../../utils/cryp')
/* return data */
const { ResponseData } = require("./../../utils/responseData")
/* GET users listing. */
router.get('/', userAccountController.getUserList);
/* registration interface */
router.post('/register', userAccountController.register);
/* login in interface */
router.post('/login', userAccountController.login);
/* user basic info interface(jwt) */
router.get('/userstate', userAccountController.userState);

/* user list */
router.get('/showlist', userAccountController.showList);



module.exports = router;
