var pool = require('../dao/pool');
/* add order */
function Add(data, callback) {
  console.log(data)
  var sql = `insert into orderform(orderdata,uid,date) 
    values('${data.orderdata}', ${data.uid},  ${data.date})`;
  pool.query(sql,
    function (err, data, fields) {
      callback(err, data, fields);
    });
}
/* find order by user id */
function Userorder(data, callback) {
  var sql = `select * from orderform where uid=${data.uid} `;
  pool.query(sql,
    function (err, data, fields) {
      callback(err, data, fields);
    });
}
/* find all the orders */
function Showorder(data, callback) {
  var sql = `SELECT orderform.*, users.id AS users_id,
    users.username as users_name 
    FROM orderform 
    INNER JOIN users 
    ON orderform.uid = users.id 
    ORDER BY orderform.date ASC
  `;
  pool.query(sql,
    function (err, data, fields) {
      callback(err, data, fields);
    });
}


//
module.exports = {
  Add: Add,/* add order */
  Userorder: Userorder,/* user orders */
  Showorder: Showorder,/* all orders */
};