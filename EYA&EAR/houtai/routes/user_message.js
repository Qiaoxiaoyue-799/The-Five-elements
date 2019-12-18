var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");

router.get('/', function (req,res,next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select avatar,username,name,sex,mobile,email from user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render('user_message',{
        result:result
      });
    }
  })
});

router.post('/search', (req, res,next) => {
  var mobile = req.body.mobile;
  var obj = [];
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select avatar,username,name,sex,mobile,email from user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if(mobile != ''){
        for (let index = 0; index < result.length; index++) {
          if(result[index].mobile == mobile){
            obj.push(result[index]);
          }
        }
        res.send({result:obj})
      }else{
        res.send({result:result})
      }
    }
  })
})

module.exports = router;
