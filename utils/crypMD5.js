const crypto = require('crypto');
const { Buffer } = require('buffer');
// ase-128-cbc The encryption algorithm requires both key and iv lengths to be 16
// secret key
const SECRET_KEY = 'Fn3L7EDzjqWjcaY2';
const key = Buffer.from(SECRET_KEY.slice(0, 16), 'utf8');
const iv = Buffer.from(SECRET_KEY.slice(0, 16), 'utf8');
// encryption function
function genPassword(password) {
  let sign = '';
  const cipher = crypto.createCipheriv('aes-128', key, iv);
  sign += cipher.update(password, 'utf8', 'hex');
  sign += cipher.final('hex');
  return sign;
}
// decryption function
function exportPassword(password) {
  let src = '';
  // const cipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  const cipher = crypto.createDecipheriv('aes-128', key, iv);
  src += cipher.update(password, 'hex', 'utf8');
  src += cipher.final('utf8');
  return src;
}
module.exports = {
  genPassword,
  exportPassword
}