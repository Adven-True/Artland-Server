//use poll
var pool = require('../dao/pool');
/* password encryption and decryption methods */
const { genPassword, exportPassword } = require('../utils/cryp')
//get user info by username and password
function Login(data, callback) {
  console.log(data)
  pool.query("select * from users where username=? and password=?", [data.username, genPassword(data.password)],
    function (err, data, fields) {
      callback(err, data, fields);
    });
}
//add user info
function Register(data, callback) {
  var usersql = `select * from users where username='${data.username}'`;
  console.log(usersql);
  // user exists
  pool.query(usersql,
    function (err, user, fields) {
      if (user.length == 0) {
        // user not exist
        pool.query("insert into users(username,password,email,mobile) values(?,?,?,?)",
          [data.username, genPassword(data.password), data.email, data.mobile],
          function (err, data, fields) {
            callback(err, data, fields);
          });
      } else {
        callback(err, user, fields);
      }

    });

}
//after login in, update info
function ChangeUser(data, callback) {
  console.log(data)
  var sql = `update users set password='${genPassword(data.password)}', email='${data.email}', mobile='${data.mobile}' where id=${data.id}`;
  pool.query(sql,
    function (err, data, fields) {
      callback(err, data, fields);
    });
}
/* add user */
function AddUser(data, callback) {
  let sql = "insert into users(username,password,email,mobile) values(?,?,?,?)";
  console.log(data)
  pool.query(sql, [data.username, genPassword(data.password), data.email, data.mobile],
    function (err, data, fields) {
      callback(err, data, fields);
    });
}

/* show user list */
function showlist(data, callback) {
  pool.query("select * from users",
    function (err, data, fields) {
      const showdata = data.map((ele) => {
        ele.password = exportPassword(ele.password)
        return ele;
      })
      callback(err, showdata, fields);
    });
}
/* get user info by id */
function getUser(data, callback) {
  var sql = `select * from users where id=${data.id}`;
  pool.query(sql,
    function (err, data, fields) {
      const showdata = data.map((ele) => {
        ele.password = exportPassword(ele.password)
        return ele;
      })
      callback(err, showdata[0], fields);
    });
}
//  delete user info
function DeleteUser(data, callback) {
  var sql = `delete from users where id=${data.id}`;
  pool.query(sql,
    function (err, data, fields) {
      callback(err, data, fields);
    });
}
//
module.exports = {
  Login,
  Register,
  ChangeUser,
  getUser,
  showlist,
  DeleteUser,
  AddUser,
};