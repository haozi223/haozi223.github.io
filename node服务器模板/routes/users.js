const { dbconnect } = require('./插件/数据库');
const token = require('./插件/token');
module.exports = require('express').Router()

  /* GET users listing. */
  .get('/', function (req, res, next) {
    res.send('respond with a resource');
  });
