import React, { Component } from 'react'
import '../../index_fxy.css';
import { Icon, Grid } from 'antd-mobile';
import {HashRouter  as Router,withRouter,Route,Link,Switch,Redirect} from 'react-router-dom';
import { Z_BLOCK } from 'zlib';
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
const axios = require('axios');
const querystring = require('querystring');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: '',
      age: '',
      sex: '',
      birth:'',
      star:'',
      job:'',
      hobby:'',
      place:'',
      sign:''
    }
  }
  componentDidMount(){
        //api请求函数

      fetch('http://139.155.6.69:5000/login',{
        method:'GET', 
        headers: {'Content-Type': 'application/json; charset=utf-8'},
      })
      .then(res=>res.json())
      .then(res=>{
          this.setState({
            data:res[0]
          })
          console.log(this.state.data);
      } 
      )
    
  }
  change1 = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  change2 = (e) => {
    this.setState({
      age: e.target.value
    })
  }
  change3 = (e) => {
    this.setState({
      sex: e.target.value
    })
  }
  change4 = (e) => {
    this.setState({
      birth: e.target.value
    })
  }
  change5 = (e) => {
    this.setState({
      star: e.target.value
    })
  }
  change6 = (e) => {
    this.setState({
      job: e.target.value
    })
  }
  change7 = (e) => {
    this.setState({
      hobby: e.target.value
    })
  }
  change8 = (e) => {
    this.setState({
      place: e.target.value
    })
  }
  change8 = (e) => {
    this.setState({
      sign: e.target.value
    })
  }
  getConnect = () => {  //api请求函数
    console.log('11');  
    console.log(this.state.data.name);
    console.log(this.state.data.username);
    console.log(this.state.username);
    console.log(this.state.name);
    fetch('http://139.155.6.69:5000/apphome/hometab/member',{
      method:'POST', 
      headers: {'Content-Type': 'application/json; charset=utf-8'},
      body: JSON.stringify({
        user_id:this.state.data.user_id,
        username:this.state.name,
        name:this.state.data.name,
        age:this.state.age,
        sex:this.state.sex,
        birth:this.state.birth,
        star:this.state.star,
        job:this.state.job,
        hobby:this.state.hobby,
        place:this.state.place,
        sign:this.state.sign
      })})
    .then(res=>{
      console.log('22')
      res.json()
    })
    .then(res=>{
      console.log('1');
      // if(res.state) {
        window.alert('修改成功！');      
    } 
    )
  }
 
  render() {
    var {todo} = this.props;
    return (
      <div style={{width: '100%',height:'108%',backgroundColor: '#fff',zIndex:999,position:'absolute',overflow:'auto'}}>
        <div style={{width:'100%',position:'relative',background:"#8794a8"}}>
        <Link to='/apphome' style={{color:'black',background:"#8794a8"}}><Icon style={{width:"40px",height:"40px"}} type="left" /></Link>
        </div>
        {/* <i className={dataItem.icon} style={{fontSize:40,color:'black',height:80,width:80,paddingTop:1,float:'left'}} ></i> */}
        <div style={{width:'100%',position:'relative',marginTop:'10px'}}>
          <img src="./images/16.jpg" style={{width:'60px',height:'60px','margin-top':'10px',borderRadius:'10px',marginLeft:'20px'}}/>
          <font style={{marginBottom:'60px',fontSize:'20px',marginLeft:'20px',marginTop:'10px'}}>{this.state.data.username}</font>
          <div style={{background:'white',display:'inline-block',width:"55px",marginLeft:'10px'}}>关注 {this.state.data.like_number}</div>
          <div style={{background:'white',display:'inline-block',width:"55px"}}>粉丝 {this.state.data.liked_number}</div>

          {/* <p className='name'>Kika Kong</p> */}
        </div>
        <div style={{background:'white',width:'100%',height:'500px',opacity:"1"}}>
          <div style={{background:'white',width:'270px',height:'110px',margin:'0 auto',marginTop:'30px'}}>
            <div style={{width:'269px',height:'109px',margin:'0 auto'}}>    
              <p style={{background:'#ccc0d4',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}} className="neirong">
                昵称：           
                <input type='text' style={{width:'197px',background:'#ccc0d4',
                height:'27px',lineHeight:'29px',fontSize:'20px'}}
                 name='username'  placeholder={this.state.data.username}  value={this.state.username} onChange={this.change1}/>  
              </p> 
              <p style={{background:'#8794a8',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}} className="neirong">
                年龄：
                <input type='text' style={{width:'197px',background:'#8794a8',
                height:'27px',lineHeight:'29px',fontSize:'20px'}}
                 name='age'  placeholder={this.state.data.age}  value={this.state.age} onChange={this.change2}/> 
                {/* {this.state.data.age} */}
              </p>              
              <p style={{background:'#ccc0d4',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}} className="neirong">
                性别：
                <input type='text' style={{width:'197px',background:'#ccc0d4',
                height:'28px',lineHeight:'29px',fontSize:'20px'}}
                 name='sex'  placeholder={this.state.data.sex}  value={this.state.sex} onChange={this.change3}/>
                {/* {this.state.data.sex} */}
              </p>
              <p style={{background:'#8794a8',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}} className="neirong">
                生日：
                <input type='text' style={{width:'197px',background:'#8794a8',
                height:'27px',lineHeight:'29px',fontSize:'20px'}}
                 name='birth'  placeholder={this.state.data.birth}  value={this.state.birth} onChange={this.change4}/>
                {/* {this.state.data.birth} */}
              </p>
              <p style={{background:'#ccc0d4',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}} className="neirong">
                星座：
                <input type='text' style={{width:'197px',background:'#ccc0d4',
                height:'28px',lineHeight:'29px',fontSize:'20px'}}
                 name='star'  placeholder={this.state.data.star}  value={this.state.star} onChange={this.change5}/>
                {/* {this.state.data.star} */}
              </p>
              <p style={{background:'#8794a8',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}} className="neirong">
                职业：
                <input type='text' style={{width:'197px',background:'#8794a8',
                height:'27px',lineHeight:'29px',fontSize:'20px'}}
                 name='job'  placeholder={this.state.data.job}  value={this.state.job} onChange={this.change6}/>
                {/* {this.state.data.job} */}
              </p>
              <p style={{background:'#ccc0d4',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}} className="neirong">
                爱好：
                <input type='text' style={{width:'197px',background:'#ccc0d4',
                height:'28px',lineHeight:'29px',fontSize:'20px'}}
                 name='hobby'  placeholder={this.state.data.hobby}  value={this.state.hobby} onChange={this.change7}/>
                {/* {this.state.data.hobby} */}
              </p>
              <p style={{background:'#8794a8',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}} className="neirong">
                所在地：
                <input type='text' style={{width:'175px',background:'#8794a8',
                height:'27px',lineHeight:'29px',fontSize:'20px'}}
                 name='place'  placeholder={this.state.data.place}  value={this.state.place} onChange={this.change8}/>
                {/* {this.state.data.place} */}
              </p>
              <p  style={{background:'#ccc0d4',border:'1px solid white',borderRadius:'10px',height:'30px',lineHeight:'30px',fontSize:'20px'}}className="neirong">
                个性签名：
                <input type='text' style={{width:'155px',background:'#ccc0d4',
                height:'28px',lineHeight:'29px',fontSize:'20px'}}
                 name='sign'  placeholder={this.state.data.sign}  value={this.state.sign} onChange={this.change9}/>
                {/* {this.state.data.sign} */}
              </p>
              <input  value='修改 ' onClick={this.getConnect} style={{ background: '#8693a6', color: '#fff' ,textAlign:'center'}}/>
            </div>
          </div>
      </div>
      </div>
    )
  }
}
