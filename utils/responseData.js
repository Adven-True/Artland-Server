
function ResponseData(code, data, message) {
  return {
    code: code,/* state code */
    data: data,/* data */
    message: message,/*  */
  }
}
module.exports = {
  ResponseData
}