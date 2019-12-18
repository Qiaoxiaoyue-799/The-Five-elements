var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user_management_add'); 
});

router.post('/add', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var password_again = req.body.password_again;
  var name = req.body.name;
  var tel = req.body.tel;
  var is_user = req.body.is_user;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into user_management(is_user,username,password,name,tel) values(?,?,?,?,?)",[is_user,username,password,name,tel],function(err,result){
    if(err){
      console.log(err);
    } else {
      if(password == password_again){
        res.end("insert success");
      }else{
        res.end("密码输入错误")
      }
    }
  })
});

module.exports = router;
