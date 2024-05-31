/* middleware */

var multer = require('multer')
const path = require('path');
/* middleware image file upload */
//custom middleware
function uploadFile(req, res, next) {
  //The dest value is the path where the file is stored; 
  //The single method represents uploading a single file, with the parameter being the key corresponding to the form data
  // let upload = multer({ dest: "public/uploads" }).single("photo");
  //file name
  let filename = "";
  //get full path
  let fullPath = path.resolve(__dirname, "../uploads");/* save picture */
  console.log(fullPath)
  let storage = multer.diskStorage({
    //set storage path
    destination: (req, file, cb) => {
      console.log("destination:", file);
      // cb(null,fullPath);
      cb(null, 'public/uploads');
    },
    //set the file name for storage
    filename: (req, file, cb) => {
      console.log("filename:", file);
      //get the file extension
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
      res.send("multererr:" + err);
      console.log("multererr:" + err);
      return false;
    } else if (err) {
      res.send("err:" + err);
      return false;
    } else {
      //after successfully upload, write the image in req.body.photo and continue to execute it
      // req.body.photo=filename;
      req.body.photo = filename;
      console.log({ 'filesuccess': req.file })
      next();
    }
  })
}
module.exports = {
  uploadFile: uploadFile
};
