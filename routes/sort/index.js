var sortController = require('../../controllers/sortController')
var express = require('express');
var router = express.Router();
var multer = require('multer')
const path = require('path');
/* return data */
const { ResponseData } = require("./../../utils/responseData")

// category：oil painting，ink wash painting，sketch，cartoon，sculpture
/*  interface list */
router.get('/', sortController.sort);



module.exports = router;