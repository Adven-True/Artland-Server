var goodsService = require('../../services/goodsservice')
var goodsController = require('../../controllers/goodsController')
var express = require('express');
var router = express.Router();
var multer = require('multer')
const path = require('path');
/* file upload */
const { uploadFile } = require('../../middles/uploadFile');
/* get user info */
const { getUserState } = require('../../middles/jwt');
/* return data */
const { ResponseData } = require("../../utils/responseData")

/* add product interface */
router.post('/', goodsController.addGoods);

/*  product list interface */
router.get('/', goodsController.getProductList);
/*  product list by id interface */
router.get('/:id', goodsController.getProductListById);
/*  product delete interface */
router.delete('/:id', goodsController.deleteProduct);

/* product detail interface  */
router.get('/detail/:id', goodsController.getDetailById);
// product update interface
router.put('/:id', uploadFile, goodsController.updateProcut);
// picture upload
router.post('/upLoad', uploadFile, goodsController.uploadPicture)
/* image file upload */
router.post('/addPicture', goodsController.uploadPicture);
module.exports = router;