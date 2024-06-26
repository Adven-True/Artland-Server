//load MySQL database connection library
var mysql = require("mysql");//use mysql component

//calling the mysql.createPool method to create a connection pool  
var pool = mysql.createPool({
  connectionLimit: 10,
  multipleStatements: true,
  host: '',//host IP
  user: '',//username
  password: '',//password
  database: ''//name of the database
});




// acquire
pool.on('acquire', function (connection) {
  console.log('Connection %d acquired', connection.threadId);
});
// connection
pool.on('connection', function (connection) {
  connection.query('SET SESSION auto_increment_increment=1')
});
// enqueue
pool.on('enqueue', function () {
  console.log('Waiting for available connection slot');
});
// release
pool.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId);
});

module.exports = pool;