

var indexRouter = require('./routes/users/index');/* root router */
var userRouter = require('./routes/users/users');/* user router */
var goodsRouter = require('./routes/goods/index');/* product operation router */
var orderRouter = require('./routes/order/index');/* user orders router*/
var sortRouter = require('./routes/sort/index');/* category router */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const cors = require("cors");
// Set domain names that allow cross domain, * represents allowing any domain name to cross domains
const corsOptions = {
  origin: "*",
  // Permissible header types
  allowedHeaders: "content-type,token,id,session,cookie,Set-Cookie,Authorization,authorization",
  // Request methods allowed across domains
  methods: "DELETE,PUT,POST,GET,OPTIONS",
  // Allow carrying verification information
  credentials: true
};
app.use(cors(corsOptions))

//

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));/* Default error log output directory */
app.use(express.json());/* Parsing JSON parameters under the post method */
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());/* Retrieve the content of cookies sent by web browsers */
app.use(express.static(path.join(__dirname, 'public')));/* Static file directory */
app.use('/', indexRouter);
/* user */
app.use('/user', userRouter);
/* order */
app.use('/order', orderRouter);
/* goods */
app.use('/goods', goodsRouter);
/* category */
app.use('/sort', sortRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// create service
app.use(function (err, req, res, next) {
  // Set local variables to only provide errors during development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // Present error page
  res.status(err.status || 500);
  res.send(err.toString());
});

module.exports = app;