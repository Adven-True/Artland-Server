// 
const obj = {
  // default request succeed
  DEFAULT_SUCCESS: {
    code: 10000,
    msg: ''
  },
  // Default request failed
  DEFAULT_ERROR: {
    code: 188,
    msg: 'system error'
  },
  // missing necessary parameters
  LACK: {
    code: 199,
    msg: 'missing necessary parameters'
  },
  // token verification failed
  TOKEN_ERROR: {
    code: 401,
    msg: 'Token verification failed'
  },
  // Incorrect username or password
  LOGIN_ERROR: {
    code: 101,
    msg: 'Incorrect username or password'
  },
  // wish information does not exist
  WISH_NOT_EXSIT: {
    code: 102,
    msg: 'wish information does not exist'
  },
  // The admin info does not exist
  ADMIN_NOT_EXSIT: {
    code: 103,
    msg: 'The admin info does not exist'
  }
};
// 
module.exports = obj;