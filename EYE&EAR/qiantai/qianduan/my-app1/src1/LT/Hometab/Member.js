import React, { Component } from 'react'
import '../../index_fxy.css';
import { Icon, Grid } from 'antd-mobile';
import {HashRouter  as Router,withRouter,Route,Link,Switch,Redirect} from 'react-router-dom';
const list = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'loading',
];

const Demo = () => {
  const data = list.map(item => ({
    icon: (<Icon type={item} />),
    text: item,
  }));
  return (
    <Grid data={data} columnNum={3} hasLine={false} activeStyle={false} />
  );
};

export default class App extends Component {
  render() {
    var {todo} = this.props;
    return (
      <div>
        <div style={{width:'100%',position:'relative',background:"#8794a8"}}>
        <Link to='/apphome' style={{color:'black',background:"#8794a8"}}><Icon style={{width:"40px",height:"40px"}} type="left" /></Link>
        </div>
        {/* <i className={dataItem.icon} style={{fontSize:40,color:'black',height:80,width:80,paddingTop:1,float:'left'}} ></i> */}
        <div style={{width:'100%',position:'relative',marginTop:'10px'}}>
          <img src="./images/16.jpg" style={{width:'60px',height:'60px','margin-top':'10px',borderRadius:'10px',marginLeft:'20px'}}/>
          <font style={{marginBottom:'60px',fontSize:'20px',marginLeft:'20px',marginTop:'10px'}}>Kika Kong</font>
          <div style={{background:'white',display:'inline-block',width:"55px",marginLeft:'10px'}}>关注 0</div>
          <div style={{background:'white',display:'inline-block',width:"55px"}}>粉丝 0</div>

          {/* <p className='name'>Kika Kong</p> */}
        </div>
        <div style={{background:'white',width:'100%',height:'500px',opacity:"1"}}>
          <div style={{background:'white',width:'270px',height:'110px',margin:'0 auto',marginTop:'30px'}}>
            <div style={{width:'269px',height:'109px',margin:'0 auto'}}>
              <p style={{background:'#ccc0d4',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}} className="neirong">昵称：Kika Kong</p>
              
              <p style={{background:'#8794a8',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}} className="neirong">年龄：20</p>
              
              <p style={{background:'#ccc0d4',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}} className="neirong">性别：女</p>
              
              <p style={{background:'#8794a8',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}} className="neirong">生日：1999年1月1日</p>
              
              <p style={{background:'#ccc0d4',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}} className="neirong">星座：**座</p>
              <p style={{background:'#8794a8',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}} className="neirong">职业：**</p>
              <p style={{background:'#ccc0d4',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}} className="neirong">爱好：**</p>
              <p style={{background:'#8794a8',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}} className="neirong">所在地：**市</p>
              <p  style={{background:'#ccc0d4',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}}className="neirong">个性签名：*****</p>
              
            </div>
            
            
               
          </div>
      </div>
      </div>
    )
  }
}

