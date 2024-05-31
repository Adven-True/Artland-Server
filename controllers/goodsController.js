var goodsService = require('../services/goodsservice')
var express = require('express');
var router = express.Router();
var multer = require('multer')
const path = require('path');
/* file upload */
const { uploadFile } = require('../middles/uploadFile');
/* get user info */
const { getUserState } = require('../middles/jwt');
/* return data */
const { ResponseData } = require("../utils/responseData")

const goodsController = {
  addGoods: function (req, res, next) {
    goodsService.Add(req.body, function (err, data, fields) {
      if (err) {
        res.json(ResponseData(400, null, err));
      } else {
        res.json(ResponseData(0, data, "data access succeed"));
      }
    });
  },
  getProductList: function (req, res, next) {
    goodsService.List({}, function (err, data, fields) {
      if (err) {
        res.json(ResponseData(400, null, err));
      } else {
        res.json(ResponseData(0, data, "data access succeed"));
      }
    });
  },
  getProductListById: function (req, res, next) {
    goodsService.Detail({ id: req.params.id }, function (err, data, fields) {
      if (err) {
        res.json(ResponseData(400, null, err));
      } else {
        res.json(ResponseData(0, data, "data access succeed"));
      }
    });
  },
  deleteProduct: function (req, res, next) {
    goodsService.Deleted({ 'id': req.params.id }, function (err, data, fields) {
      if (err) {
        res.json(ResponseData(400, null, err));;
      } else {
        res.json(ResponseData(0, data, "delete succeed"));;
      }
    });
  },
  getDetailById: function (req, res, next) {
    goodsService.Detail({ 'id': req.params.id }, function (err, data, fields) {
      if (err) {
        res.json(ResponseData(400, null, err));;
      } else {
        res.json(ResponseData(0, data, "data access succeed"));;
      }
    });
  },
  updateProcut: function (req, res, next) {
    var data = {
      goodname: req.body.goodname,
      gooddesc: req.body.gooddesc,
      mainpng: req.body.mainpng,
      sort_id: req.body.sort_id,
      price: req.body.price,
      id: req.params.id
    }
    goodsService.Change(data, function (err, data, fields) {
      if (err) {
        res.json(ResponseData(400, null, err));;
      } else {
        res.json(ResponseData(0, data, "update succeed"));;
      }
    });
  },
  uploadPicture: function (req, res, next) {
    if (req.body.photo) {
      const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.body.photo}`;
      res.json(ResponseData(0, req.body.photo, "img upload succeed"));
    } else {
      res.json(ResponseData(400, null, "img upload failed"));
    }
  },
  addPicture: function (req, res, next) {
    // let upload = multer({ dest: "public/uploads" }).single("photo");
    //file name
    let filename = "";
    //full path
    let fullPath = path.resolve(__dirname, "../uploads");/* store img */
    console.log(fullPath)
    let storage = multer.diskStorage({
      //config storage path
      destination: (req, file, cb) => {
        console.log("destination:", file);
        // cb(null,fullPath);
        cb(null, 'public/uploads');
      },
      //set file name
      filename: (req, file, cb) => {
        console.log("filename:", file);
        //get file extension
        let extname = path.extname(file.originalname);
        filename = file.fieldname + "-" + Date.now() + extname;
        cb(null, filename);
      }
    })
    let upload = multer({ storage: storage }).single("file");
    /* The name of the single attribute must be consistent with the uploaded name, otherwise an error will be reported：multererr:MulterError: */
    upload(req, res, (err) => {
      console.log(req.file);
      /* file storage */
      if (err instanceof multer.MulterError) {
        res.json({ "errno": 1, message: err });
        return false;
      } else if (err) {
        // res.send("err:" + err);
        res.json({ "errno": 1, message: err });
        return false;
      } else {
        //
        // req.body.photo=filename;
        req.body.photo = filename;
        res.json({
          "errno": 0,
          "data": {
            "url": '/api/uploads/' + req.body.photo, // picture src, mandatory
          }
        });

      }
    })
  }
}

module.exports = goodsController;