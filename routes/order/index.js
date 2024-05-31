/* user order */
var express = require('express');
var router = express.Router();
var orderController = require('../../controllers/orderController')


/* return data */
const { ResponseData } = require("../../utils/responseData")
/* add new order */
router.post('/', orderController.addOrder);
/* find user order */
router.post('/showorder', orderController.findUserOrder);
/* get all the orders */
router.get('/', orderController.getAllOrders);

module.exports = router;
