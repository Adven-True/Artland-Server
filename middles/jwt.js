/* set the current token */
var Token = require('./../utils/token');
/* password decryption method  */
const { exportPassword } = require('./../utils/cryp')
function getUserState(req, res, next) {
  console.log(req.headers.authorization)
  if (req.headers.authorization) {
    let userinfo = Token.decrypt(req.headers.authorization);
    /* decrypt password, return and display */
    userinfo.data.userdata.password = exportPassword(userinfo.data.userdata.password);
    req.body.userdata = userinfo;
    next();
  } else {
    req.body.userdata = ''
    next();
  }

}
module.exports = {
  getUserState: getUserState
};