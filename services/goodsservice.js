var pool = require('../dao/pool');


/* add goods */
function Add(data, callback) {
  var sql = `insert into goods(goodname,gooddesc,price,mainpng,sort_id)
    values('${data.goodname}', '${data.gooddesc}', '${data.price}','${data.mainpng}','${data.sort_id}')`;
  pool.query(sql, function (err, data, fields) {
    callback(err, data, fields);
  });
}

/* goods list */
function List({ }, callback) {
  pool.query(`SELECT goods.*, sort.sort, sort.id AS sort_id,sort.sort
FROM goods
INNER JOIN sort ON goods.sort_id = sort.id
ORDER BY goods.id ASC`,
    function (err, data, fields) {
      callback(err, data, fields);
    });
}
/* delete goods */
function Deleted(data, callback) {
  var sql = `delete from goods where id='${data.id}' `;
  pool.query(sql, function (err, data, fields) {
    callback(err, data, fields);
  });
}
/* view detail */
function Detail(data, callback) {
  pool.query(`SELECT goods.*, sort.sort, sort.id AS sort_id,sort.sort
FROM goods
INNER JOIN sort ON goods.sort_id = sort.id WHERE goods.id = ${data.id}
ORDER BY goods.id ASC`,
    function (err, data, fields) {
      callback(err, data[0], fields);
    });
}
// update goods info
function Change(data, callback) {
  let sql = '';
  if (data.mainpng != '') {
    sql = `
           update goods set goodname='${data.goodname}', gooddesc='${data.gooddesc}', mainpng='${data.mainpng}',price='${data.price}', sort_id='${data.sort_id}' where id=${data.id * 1}
       `
  } else {
    sql = `
         update goods set goodname='${data.goodname}', gooddesc='${data.gooddesc}',price='${data.price}', sort_id='${data.sort_id}' where id=${data.id * 1}
        `
  }
  pool.query(sql,
    function (err, data, fields) {
      callback(err, data, fields);
    });
}


//
module.exports = {
  Add: Add,
  List: List,
  Deleted: Deleted,
  Detail: Detail,
  Change: Change
};