var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");

router.get('/', function (req,res,next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from ticket", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render('commodity_management',{
        result:result
      });
    }
  })
});

router.post('/state', (req, res,next) => {
  var state = req.body.state;
  var id = parseInt(req.body.id);
  id = id+1;
  var old_state = req.body.old_state;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("update ticket set state=? where state=?&&id=?",[state,old_state,id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.end(state)
    }
  })
})
router.post('/search', (req, res,next) => {
  var order = req.body.order;
  var obj = [];
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from ticket", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if(order != ''){
        for (let index = 0; index < result.length; index++) {
          if(result[index].id == order){
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
