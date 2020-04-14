var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");
var fs = require("fs");
const url = require("url");
const path = require("path");
var username;
var password;
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('goodList', { title: 'EYE&EAR' });
// });
router.post('/login',function(req,res,next) {
  username = req.body.username;
  password = req.body.password;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from user where username = ? and password = ?",[username,password],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      console.log( result);
      res.send(result);
    }
  });
});
router.get('/login',function(req,res,next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from user where username = ? and password = ?",[username,password],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      console.log( result);
      res.send(result);
    }
  });
});

router.post('/register',function(req,res,next) {
  var username1 = req.body.username;
  var password1 = req.body.password;
  var mobile1 = req.body.mobile;
  var time = new Date();
  time = time.toLocaleDateString();
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from user",function(err,result) {
    if(err) {
      console.log(err);
    } else {
      console.log(result)
      var is = true;
      for(var i = 0; i < result.length; i++){
        if(result[i].username == username1){
          res.send({state:false});
          return;
        }
      }
      if(is){
        con.query("insert into user(username,password,mobile,time) values(?,?,?,?)",[username1,password1,mobile1,time],function(err,result) {
          if(err) {            
            console.log(err);
          } else {
            console.log(result);
            res.send({state:true});
          }
        });
      }}
  }); 
})
router.get('/list',function(req,res,next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters",function(err,result) {
    if(err) {
      console.log(err);
    } else {
      // console.log(result);
      res.render("list.ejs",{chapterList:result});
    }
  });
})
router.get('/del',function(req,res,next) {
  var chapterId = req.query.chapterid;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from chapters where chapterid=?",[chapterId],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      res.end("delete success");
    }
  })
})
router.get('/apphome/hometab/eye/class',function(req,res,next) {
    var id = req.query.tab_id;
    var con = mysql.createConnection(dbconfig);
    con.connect();
  //   con.query("select * from ear where username = ? and password = ?",[username,password],function(err,result) {
      con.query("select * from eye where tab_id = ?",[id],function(err,result) {
      if(err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
});
router.get('/apphome/hometab/ear/class',function(req,res,next) {
  var id = req.query.tab_id;
  var con = mysql.createConnection(dbconfig);
  con.connect();
//   con.query("select * from ear where username = ? and password = ?",[username,password],function(err,result) {
    con.query("select * from ear where tab_id = ?",[id],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

router.get('/apphome/hometab/ear',function(req,res,next) {
  //   var username = req.body.username;
  //   var password = req.body.password;
    var con = mysql.createConnection(dbconfig);
    con.connect();
  //   con.query("select * from ear where username = ? and password = ?",[username,password],function(err,result) {
      con.query("select * from ear",function(err,result) {
      if(err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
});
router.get('/apphome/hometab/eye',function(req,res,next) {
  //   var username = req.body.username;
  //   var password = req.body.password;
    var con = mysql.createConnection(dbconfig);
    con.connect();
  //   con.query("select * from ear where username = ? and password = ?",[username,password],function(err,result) {
      con.query("select * from eye",function(err,result) {
      if(err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
});
router.get('/apphome/hometab/details',function(req,res,next) {
  //   var username = req.body.username;
  //   var password = req.body.password;
    var con = mysql.createConnection(dbconfig);
    con.connect();
  //   con.query("select * from ear where username = ? and password = ?",[username,password],function(err,result) {
      con.query("select * from eye",function(err,result) {
      if(err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
});
router.get('/apphome/hometab/details1',function(req,res,next) {
  //   var username = req.body.username;
  //   var password = req.body.password;
    var con = mysql.createConnection(dbconfig);
    con.connect();
  //   con.query("select * from ear where username = ? and password = ?",[username,password],function(err,result) {
      con.query("select * from ear",function(err,result) {
      if(err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
});
router.get('/apphome/hometab/author',function(req,res,next) {
  //   var username = req.body.username;
  //   var password = req.body.password;
    var con = mysql.createConnection(dbconfig);
    con.connect();
  //   con.query("select * from ear where username = ? and password = ?",[username,password],function(err,result) {
      con.query("select * from eye",function(err,result) {
      if(err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
});
router.get('/apphome/hometab/author1',function(req,res,next) {
  //   var username = req.body.username;
  //   var password = req.body.password;
    var con = mysql.createConnection(dbconfig);
    con.connect();
  //   con.query("select * from ear where username = ? and password = ?",[username,password],function(err,result) {
      con.query("select * from ear",function(err,result) {
      if(err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
});
router.get('/apphome/hometab/eye/search',function(req,res,next){
  var article_id = req.query.content;
  console.log(article_id);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from eye where content like CONCAT('%',?,'%')", [article_id],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      console.log(result.length);
      res.send(result);
    }
  });
})
router.get('/apphome/hometab/ear/search',function(req,res,next){
  var article_id = req.query.content;
  console.log(article_id);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from ear where content like CONCAT('%',?,'%')", [article_id],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      console.log(result.length);
      res.send(result);
    }
  });
})
router.get('/apphome',function(req,res,next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from art ",function(err,result) {
    if(err) {
      console.log(err);
    } else {
      // console.log( result);
      res.send(result);
    }
  });
});
router.get('/apphome1',function(req,res,next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from ticket ",function(err,result) {
    if(err) {
      console.log(err);
    } else {
      // console.log( result);
      res.send(result);
    }
  });
});
router.get('/detail1',function(req,res,next) {
  var con = mysql.createConnection(dbconfig);
  var id = req.query.id;
  console.log(req.query);
  con.connect();
  con.query("select * from ticket where id = ? ",[id],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      // console.log( result);
      res.send(result);
    }
  });
});
router.get('/detail2',function(req,res,next) {
  var con = mysql.createConnection(dbconfig);
  var id = req.query.id;
  console.log(req.query);
  con.connect();
  con.query("select * from art where id = ? ",[id],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      // console.log(result);
      res.send(result);
    }
  });
});
// router.post('/publish',function(req,res,next) {
//   var title = req.body.title;
//   var content = req.body.content;
//   var aprice = req.body.aprice;
//   var files=req.body.files;
//   var img0 = req.body.img0;
//   var img1 = req.body.img1;
//   var img2 = req.body.img2;
//   var img3 = req.body.img3;
//   var img4 = req.body.img4;
//   var img5 = req.body.img5;
//   var name0 = req.body.name0;
//   var name1 = req.body.name1;
//   var name2 = req.body.name2;
//   var name3 = req.body.name3;
//   var name4 = req.body.name4;
//   var name5 = req.body.name5;
//   // this.name_0 = req.body.name0;
//   // this.name_1 = req.body.name1;
//   // var name2 = req.body.name2;
//   // var name3 = req.body.name3;
//   // var name4 = req.body.name4;
//   // var name5 = req.body.name5;
//   var length=req.body.length



//   for(var i=0;i<length;i++){
//     (function(i){
//       // var that=this
//       var img=''
//       var name=''
//       var timer = (new Date()).getTime();
//       if(i==0){
//         img=img0
//         name=name0
//         name_0=name

//       }
//       if(i==1){
//         img=img1
//         name=name1
//         name_1=name
//       }
//       if(i==2){
//         img=img2
//         name=name2
//         name_2=name
//       }
//       if(i==3){
//         img=img3
//         name=name3
//         name_3=name
//       }
//       if(i==4){
//         img=img4
//         name=name4
//         name_4=name
//       }
//       if(i==5){
//         img=img5
//         name=name5
//         name_5=name
//       }
//       var base64Data = img.replace(/^data:image\/\w+;base64,/, "");
//       var dataBuffer = Buffer.from(base64Data, 'base64');
//       // name=timer+name
//       fs.writeFile(__dirname+"\\images\\"+name, dataBuffer, function(err) {
//           if(err){
//           }else{
//             // res.send("保存成功！");
//             console.log(name)
//             console.log(i)
//           }
//       });
//     })(i)

//   }
  

//  console.log(name1)
//  console.log(name5)
//  name0 = __dirname+"\\images\\"+name0;
//  name1 = __dirname+"\\images\\"+name1;
//  name2 = __dirname+"\\images\\"+name2;
//  name3 = __dirname+"\\images\\"+name3;
//  name4 = __dirname+"\\images\\"+name4;
//  name5 = __dirname+"\\images\\"+name5;
//   var con = mysql.createConnection(dbconfig);
//   con.connect();
//   con.query("insert into art(aName,aContent,aPrice2,aImg,img1,img2,img_1,img_2,img_3) values(?,?,?,?,?,?,?,?,?)",[title,content,aprice,name0,name1,name2,name3,name4,name5],function(err,result) {
//     if(err) {            
//       console.log(err);
//     } else {
//       console.log(result);
//       res.send({status:'success'});      
//     }
//   });
// })
router.get('/apphome',function(req,res,next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from art ",function(err,result) {
    if(err) {
      console.log(err);
    } else {
      // console.log( result);
      res.send(result);
    }
  });
});
router.get('/apphome1',function(req,res,next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from ticket ",function(err,result) {
    if(err) {
      console.log(err);
    } else {
      // console.log( result);
      res.send(result);
    }
  });
});
router.get('/detail1',function(req,res,next) {
  var con = mysql.createConnection(dbconfig);
  var id = req.query.id;
  console.log(req.query);
  con.connect();
  con.query("select * from ticket where id = ? ",[id],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      // console.log( result);
      res.send(result);
    }
  });
});
router.get('/detail2',function(req,res,next) {
  var con = mysql.createConnection(dbconfig);
  var id = req.query.id;
  console.log(req.query);
  con.connect();
  con.query("select * from art where id = ? ",[id],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      // console.log(result);
      res.send(result);
    }
  });
});
router.post('/publish',function(req,res,next) {
  var title = req.body.title;
  var content = req.body.content;
  var aprice = req.body.aprice;
  var files=req.body.files;
  var img0 = req.body.img0;
  var img1 = req.body.img1;
  var img2 = req.body.img2;
  var img3 = req.body.img3;
  var img4 = req.body.img4;
  var img5 = req.body.img5;
  var name0 = req.body.name0;
  var name1 = req.body.name1;
  var name2 = req.body.name2;
  var name3 = req.body.name3;
  var name4 = req.body.name4;
  var name5 = req.body.name5;
  var length=req.body.length

  var title0=title;
  var title1=title;
  var title2=title;
  var title3=title;  
  var title4=title;
  var title5=title;
  for(var i=0;i<length;i++){
    (function(i){
      var img=''
      var name=''
      if(i==0){
        img=img0
        if(name0.indexOf("0.png")!=-1){
          title0='';
        }
        name=title0+name0
      }
      if(i==1){
        img=img1
        if(name1.indexOf("0.png")!=-1){
          title1='';
        }
        name=title1+name1
      }
      if(i==2){
        img=img2
        if(name2.indexOf("0.png")!=-1){
          title2='';
        }
        name=title2+name2
      }
      if(i==3){
        img=img3
        if(name3.indexOf("0.png")!=-1){
          title3='';
        }
        name=title3+name3
      }
      if(i==4){
        img=img4
        if(name4.indexOf("0.png")!=-1){
          title4='';
        }
        name=title4+name4
      }
      if(i==5){
        img=img5
        if(name5.indexOf("0.png")!=-1){
          title5='';
        }
        name=title5+name5
      }
      var base64Data = img.replace(/^data:image\/\w+;base64,/, "");
      var dataBuffer = Buffer.from(base64Data, 'base64');
      
      fs.writeFile(__dirname+"\\images\\"+name, dataBuffer, function(err) {
          if(err){
          }else{
            // res.send("保存成功！");
            console.log(name)
            console.log(i)
          }
      });
    })(i)
  }
  var con = mysql.createConnection(dbconfig);
  con.connect();
  console.log(title0+name0);
  con.query("insert into art(aName,aContent,aPrice2,aImg,img1,img2,img_1,img_2,img_3) values(?,?,?,?,?,?,?,?,?)",[title,content,aprice,title0+name0,title1+name1,title2+name2,title3+name3,title4+name4,title5+name5],function(err,result) {
    if(err) {            
      console.log(err);
    } else {
      console.log(result);
      // res.send({status:'success'});      
    }
  });
})

/**
 * update chapters set content-? where chapterid=?
 */
router.get('/images',function(req,res,next) {
  console.log(req.query.imgname)
  var files=fs.readdirSync(__dirname+"/images");
  console.log(files);
  for(var i=0;i<files.length;i++){
    if(files[i]==req.query.imgname){
      fs.readFile(__dirname+"/images/"+files[i], function(err, data) {
        if (err) throw err;
       
        res.send(data);
    });

    }
  }
});
router.get('/img',function(req,res,next) {
  console.log(req.query.imgname)
  var files=fs.readdirSync(__dirname+"/img");
  console.log(files);
  for(var i=0;i<files.length;i++){
    if(files[i]==req.query.imgname){
      fs.readFile(__dirname+"/img/"+files[i], function(err, data) {
        if (err) throw err;
       
        res.send(data);
    });

    }
  }
});
router.post('/dynamic',function(req,res,next) {
  var time = req.body.time;
  var content = req.body.content;
  var img0 = req.body.img0;
  var img1 = req.body.img1;
  var img2 = req.body.img2;
  var img3 = req.body.img3;
  var img4 = req.body.img4;
  var img5 = req.body.img5;
  var name0 = req.body.name0;
  var name1 = req.body.name1;
  var name2 = req.body.name2;
  var name3 = req.body.name3;
  var name4 = req.body.name4;
  var name5 = req.body.name5;
  var length=req.body.length

  var time0=req.body.time;
  var time1=req.body.time;
  var time2=req.body.time;
  var time3=req.body.time;
  var time4=req.body.time;
  var time5=req.body.time;


  for(var i=0;i<length;i++){
    (function(i){
      var img=''
      var name=''
      if(i==0){
        img=img0
        if(name0.indexOf("0.png")!=-1){
          time0='';
        }
        name=time0+name0
        console.log(name)

      }
      if(i==1){
        img=img1
        if(name1.indexOf("0.png")!=-1){
          time1='';
        }
        name=time1+req.body.name1
      }
      if(i==2){
        img=img2
        if(name2.indexOf("0.png")!=-1){
          time2='';
        }
        name=time2+req.body.name2
      }
      if(i==3){
        img=img3
        if(name3.indexOf("0.png")!=-1){
          time3='';
        }
        name=time3+req.body.name3
      }
      if(i==4){
        img=img4
        if(name4.indexOf("0.png")!=-1){
          time4='';
        }
        name=time4+req.body.name4
      }
      if(i==5){
        img=img5
        if(name5.indexOf("0.png")!=-1){
          time5='';
        }
        name=time5+req.body.name5
      }
      var base64Data = img.replace(/^data:image\/\w+;base64,/, "");
      var dataBuffer = Buffer.from(base64Data, 'base64');
      console.log(__dirname+"\\img\\"+name)
      fs.writeFile(__dirname+"\\img\\"+name, dataBuffer, function(err) {
          if(err){
          }else{
            // res.send("保存成功！");
            // console.log(name)
            console.log(i)
          }
      });
    })(i)
  }
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into active(img1,content,time,img2,img3,img4,img5,img6) values(?,?,?,?,?,?,?,?)",[time+name0,content,time,time+name1,time+name2,time+name3,time+name4,time+name5],function(err,result) {
    if(err) {            
      console.log(err);
    } else {
      console.log(result);
      // res.send({status:'success'});      
    }
  });
})
router.get('/active',function(req,res,next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from active ",function(err,result) {
    if(err) {
      console.log(err);
    } else {
      console.log(result)
      res.send(result);
    }
  });
});
router.post('/cart',function(req,res,next) {
  aName = req.body.aName;
  aPrice = req.body.aPrice;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into cart(gName,gPrice2) values(?,?)",[aName,aPrice],function(err,result) {
    if(err) {            
      console.log(err);
    } else {
      console.log(result);
      res.send({status:'success'});
      
    }
  });
})
router.post('/cart1',function(req,res,next) {
  tName = req.body.tName;
  tPrice = req.body.tPrice;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into cart(gName,gPrice2) values(?,?)",[tName,tPrice],function(err,result) {
    if(err) {            
      console.log(err);
    } else {
      console.log(result);
      res.send({status:'success'});
      
    }
  });
})
router.get('/cartlist',function(req,res,next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from cart",function(err,result) {
    if(err) {            
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
      
    }
  });
})
router.post('/cart2',function(req,res,next) {
  var id=req.body.id
  console.log(id)
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from cart where id=?",[id],function(err,result) {
    if(err) {
      console.log(err);
    } else {
    
    }
  })
})
router.post('/heart',function(req,res,next) {
  userId = req.body.userId;
  num = req.body.num
  id = req.body.id;
  console.log(num);
  console.log(userId)
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("update eye set num=?,people=? where article_id = ?",[num,userId,id],function(err,result) {
    if(err) {            
      console.log(err);
    } else {
      console.log(1111);
      res.send({status:'success'});      
    }
  });
})
router.post('/heart1',function(req,res,next) {
  userId = req.body.userId;
  num = req.body.num
  id = req.body.id;
  console.log(num);
  console.log(userId)
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("update ear set num=?,people=? where article_id = ?",[num,userId,id],function(err,result) {
    if(err) {            
      console.log(err);
    } else {
      console.log(1111);
      res.send({status:'success'});      
    }
  });
})
/**
 * update chapters set content-? where chapterid=?
 */
module.exports = router;
