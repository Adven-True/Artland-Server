var pool = require('../dao/pool');
/* get category list */
function List(data, callback) {
  let sql = `select * from sort`;
  pool.query(sql,
    function (err, data, fields) {
      callback(err, data, fields);
    });
}
//
module.exports = {
  List: List,/* get all the categories */
};