// 
const jwt = require('jsonwebtoken');
// set a key to encrypt and decrypt tokens
const tokenKey = 'XfZEpWEn?ARD7rHBN';
// Set the default token expiration time in seconds
const TOKEN_EXPIRE_SENCOND = 3600 * 1000 + 's';
// 
const Token = {
  /**
   * Token encryption method
   * @param data Data that needs to be encrypted in the Token
   * @returns {*} return a token
   */
  encrypt: function (data) {
    return jwt.sign({ userdata: data }, tokenKey, { expiresIn: TOKEN_EXPIRE_SENCOND })
  },
  /**
   * Token decryption method
   * @param token encrypted Token
   * @returns return object{{token: boolean（true，false）, data: * (Decrypted data or error messages)}}
   */
  decrypt: function (token) {
    try {
      let data = jwt.verify(token, tokenKey);
      return {
        token: true,
        data: data
      };
    } catch (e) {
      return {
        token: false,
        data: e
      }
    }
  }
};
// 
module.exports = Token;
