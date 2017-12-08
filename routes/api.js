/**
 * 前后台交互接口
 */
var express = require('express');
var router = express.Router();

//用户dao
var userDao = require('../dao/userDao');

//登录
router.post('/login', function(req, res, next) {
  userDao.loginAction(req,res,next);
});

module.exports = router;
