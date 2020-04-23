var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/chatroom', function (req, res, next) {
  var id = req.body.id
  var data = req.body.data
  console.log(id)
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chat",[id],function(err,result){
    if(err){
      console.log(err)
    }else{
      con.query("update chat set data=? where id = ? ", [data,id], function (err, result) {
        if (err) {
          console.log(err);
        } else {
          con.query("select * from chat where id = ?",[id],function(err,result){
            if(err){
              console.log(err)
            }else{
              res.send(result)
            }
          })
        }
      })
    }
  })
})

module.exports = router;
