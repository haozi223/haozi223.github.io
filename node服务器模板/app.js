const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const ejs = require('ejs');
const bodyParser = require('body-parser')


express()

  // view engine setup
  .set('views', path.join(__dirname, 'views'))
  .engine('.html', ejs.__express)
  .set('view engine', 'html')
  .use(logger('dev'),
    cookieParser(),
    express.static(path.join(__dirname, 'public')),
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json())

  .use('/', require('./routes/index'))//页面

  .use('/api', require('./routes/users'))//接口

  // catch 404 and forward to error handler
  .use(function (req, res, next) {
    next(createError(404));
  })

  // error handler
  .use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  })
  .listen(5500);