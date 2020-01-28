module.exports = require('express').Router()

  /* GET home page. */
  .get('/', function (req, res, next) {
    res.render('首页');
  })


