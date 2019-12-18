/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.7.1-m11 : Database - dbsystem
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`dbsystem` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `dbsystem`;

/*Table structure for table `art` */

DROP TABLE IF EXISTS `art`;

CREATE TABLE `art` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `aImg` varchar(50) DEFAULT NULL,
  `aName` varchar(20) DEFAULT NULL,
  `aContent` varchar(10000) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  `user_id` int(100) DEFAULT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `aPrice1` varchar(10) DEFAULT NULL,
  `aPrice2` varchar(10) DEFAULT NULL,
  `pBuy` int(10) DEFAULT NULL,
  `aSell` int(10) DEFAULT NULL,
  `aUnSell` int(10) DEFAULT NULL,
  `state` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `art_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `art` */

insert  into `art`(`id`,`aImg`,`aName`,`aContent`,`username`,`user_id`,`avatar`,`aPrice1`,`aPrice2`,`pBuy`,`aSell`,`aUnSell`,`state`) values (1,'./images/刺绣.jpg','小狐狸','独特而灵秀的刺绣作品，流淌的陶瓷，流动的刺绣，果然名不虚传！','小AI',1,'./images/16.jpg','￥1000','￥999',999,0,5,'上架');

/*Table structure for table `cart` */

DROP TABLE IF EXISTS `cart`;

CREATE TABLE `cart` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `gImg` varchar(50) DEFAULT NULL,
  `gName` varchar(20) DEFAULT NULL,
  `gPrice2` varchar(10) DEFAULT NULL,
  `gNum` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `cart` */

insert  into `cart`(`id`,`gImg`,`gName`,`gPrice2`,`gNum`) values (1,'./images/刺绣.jpg','小狐狸','￥999',1);

/*Table structure for table `chapters` */

DROP TABLE IF EXISTS `chapters`;

CREATE TABLE `chapters` (
  `chapterid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  `content` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`chapterid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `chapters` */

insert  into `chapters`(`chapterid`,`title`,`content`) values (2,'2','2'),(3,'3','3'),(4,'4','4'),(5,'1','1'),(8,'ssas','asasas'),(9,'sd','sdsd');

/*Table structure for table `chatroom` */

DROP TABLE IF EXISTS `chatroom`;

CREATE TABLE `chatroom` (
  `user_id` int(100) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `message` varchar(100) DEFAULT NULL,
  `chatname` varchar(20) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `chatimg` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `chatroom_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `chatroom` */

/*Table structure for table `ear` */

DROP TABLE IF EXISTS `ear`;

CREATE TABLE `ear` (
  `tab_id` varchar(20) NOT NULL,
  `article_id` int(100) NOT NULL AUTO_INCREMENT,
  `user_id` int(100) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `content` varchar(10000) DEFAULT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `author` varchar(20) DEFAULT NULL,
  `img` varchar(50) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  KEY `article_id` (`article_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `ear_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `ear` */

insert  into `ear`(`tab_id`,`article_id`,`user_id`,`title`,`content`,`avatar`,`author`,`img`,`time`) values ('画展',1,1,'美术的诞生:从太阳王到拿破仑——巴黎国立高等美术学院珍藏展','<p align=\"left\">&nbsp;&nbsp;&nbsp;&nbsp;2002年岁末，神话开始。2003年秋冬，走向高潮和终极。《无间道》即自承取乎佛家理念，光明与黑暗、生存与消亡、存在与虚无纠结于混然一体，愕然分崩离析，亦是丰富兼统一的过程。有因就有果，有孽就有缘，境与相的妙处在于言诠的限度，不可道破，又不可沉默，相互依托。心音始终在，拷问自我，拷问时空。这是最好的时代，这是最坏的时代，几乎每个时代的人都在这么说。然而《维摩诘经·观众生品第七》中说：无住则无本。从身体的言行开始，经过辩难言说的层面，初步达到存有自视境界，最后不过是归结为生存的态度。在我看来，刘健明、陈永仁、韩琛、黄志诚、倪永孝、陆启昌、杨锦荣、沈澄等人其实是宿命中的镜像人物，都可以从对方身上看到自我，抗争、迸发、沉雄、挥洒，仿佛的劫数、扭曲的生命，于是乎“无间道”。</p>　 ','./images/16.jpg','小AI','./images/赫本.jpg','2019-12-02 17:11:41'),('话剧',2,1,'话剧《浮士德》将于12月6日举行世界首演','<p align=\"left\">&nbsp;&nbsp;&nbsp;&nbsp;据悉，话剧《浮士德》将于12月6日在南京保利大剧院举行世界首演，之后将启程西安、杭州、无锡，2020年1月9日至12日在北京进行首轮巡演的压轴演出。</p>　 ','./images/16.jpg','小AI','./images/浮士德.jpg','2019-11-28 08:05:06'),('话剧',3,1,'话剧《暗恋桃花源》2020巡演昆明站','<p align=\"left\">&nbsp;&nbsp;&nbsp;&nbsp;经典版《暗恋桃花源》昆明站时间：2020-01-19至2020-01-21 20:00</p>　 ','./images/16.jpg','小AI','./images/桃花源.png','2019-11-26 17:23:22');

/*Table structure for table `eye` */

DROP TABLE IF EXISTS `eye`;

CREATE TABLE `eye` (
  `tab_id` varchar(20) NOT NULL,
  `article_id` int(100) NOT NULL,
  `user_id` int(100) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `content` varchar(10000) DEFAULT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `author` varchar(20) DEFAULT NULL,
  `img` varchar(50) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`article_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `eye_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `eye` */

insert  into `eye`(`tab_id`,`article_id`,`user_id`,`title`,`content`,`avatar`,`author`,`img`,`time`) values ('话剧',1,1,'话剧《浮士德》将于12月6日举行世界首演','<p align=\"left\">&nbsp;&nbsp;&nbsp;&nbsp;据悉，话剧《浮士德》将于12月6日在南京保利大剧院举行世界首演，之后将启程西安、杭州、无锡，2020年1月9日至12日在北京进行首轮巡演的压轴演出。</p>　 ','./images/16.jpg','小AI','./images/浮士德.jpg','2019-11-25 08:13:28'),('话剧',2,1,'话剧《暗恋桃花源》昆明站巡演','<p align=\"left\">&nbsp;&nbsp;&nbsp;&nbsp;经典版《暗恋桃花源》昆明站时间：2020-01-19至2020-01-21 20:00</p>　 ','./images/16.jpg','小AI','./images/桃花源.png','2019-11-30 08:24:56'),('画展',3,1,'美术的诞生:从太阳王到拿破仑——巴黎国立高等美术学院珍藏展','<p align=\"left\">&nbsp;&nbsp;&nbsp;&nbsp;2002年岁末，神话开始。2003年秋冬，走向高潮和终极。《无间道》即自承取乎佛家理念，光明与黑暗、生存与消亡、存在与虚无纠结于混然一体，愕然分崩离析，亦是丰富兼统一的过程。有因就有果，有孽就有缘，境与相的妙处在于言诠的限度，不可道破，又不可沉默，相互依托。心音始终在，拷问自我，拷问时空。这是最好的时代，这是最坏的时代，几乎每个时代的人都在这么说。然而《维摩诘经·观众生品第七》中说：无住则无本。从身体的言行开始，经过辩难言说的层面，初步达到存有自视境界，最后不过是归结为生存的态度。在我看来，刘健明、陈永仁、韩琛、黄志诚、倪永孝、陆启昌、杨锦荣、沈澄等人其实是宿命中的镜像人物，都可以从对方身上看到自我，抗争、迸发、沉雄、挥洒，仿佛的劫数、扭曲的生命，于是乎“无间道”。</p>　 ','./images/16.jpg','小AI','./images/赫本.jpg','2019-11-26 08:26:14');

/*Table structure for table `souvenir` */

DROP TABLE IF EXISTS `souvenir`;

CREATE TABLE `souvenir` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sName` char(1) DEFAULT NULL,
  `sContent` char(1) DEFAULT NULL,
  `username` char(1) DEFAULT NULL,
  `avatar` char(1) DEFAULT NULL,
  `sPrice1` char(1) DEFAULT NULL,
  `sPrice2` char(1) DEFAULT NULL,
  `pBuy` int(11) DEFAULT NULL,
  `sSell` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `souvenir` */

/*Table structure for table `ticket` */

DROP TABLE IF EXISTS `ticket`;

CREATE TABLE `ticket` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `tImg` varchar(50) DEFAULT NULL,
  `tName` varchar(20) DEFAULT NULL,
  `tContent` varchar(10000) DEFAULT NULL,
  `tPrice1` varchar(10) DEFAULT NULL,
  `tPrice2` varchar(10) DEFAULT NULL,
  `pBuy` int(10) DEFAULT NULL,
  `tSell` int(10) DEFAULT NULL,
  `tUnSell` int(10) DEFAULT NULL,
  `state` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `ticket` */

insert  into `ticket`(`id`,`tImg`,`tName`,`tContent`,`tPrice1`,`tPrice2`,`pBuy`,`tSell`,`tUnSell`,`state`) values (1,'./images/票.jpg','【永乐票务】丹麦钢琴家伊丽莎白·尼尔森独','温馨提示：不支持7天无理由退换货','90','80',8,8,66,'上架');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` int(100) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `like_number` int(50) DEFAULT NULL,
  `liked_number` int(50) DEFAULT NULL,
  `age` int(10) DEFAULT NULL,
  `sex` char(1) DEFAULT '女',
  `birth` varchar(20) DEFAULT NULL,
  `star` varchar(20) DEFAULT NULL,
  `job` varchar(20) DEFAULT NULL,
  `hobby` varchar(20) DEFAULT NULL,
  `place` varchar(20) DEFAULT NULL,
  `sign` varchar(100) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `VIP` int(1) DEFAULT '0',
  `is_user` varchar(22) DEFAULT NULL,
  `time` varchar(20) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`user_id`,`username`,`password`,`avatar`,`like_number`,`liked_number`,`age`,`sex`,`birth`,`star`,`job`,`hobby`,`place`,`sign`,`mobile`,`VIP`,`is_user`,`time`) values (1,'小AI','111','./images/16.jpg',6,7,19,'女','2000','摩羯座','学生','游泳','河北省','心情','10086',0,'','2019-12-7'),(2,'2','22','./images/16.jpg',1,NULL,NULL,'女',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,'2019-12-7'),(3,'1','11','./images/16.jpg',1,1,1,'1','1','1',NULL,NULL,NULL,NULL,NULL,0,NULL,'2019-12-8');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
