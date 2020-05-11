import React, { Component } from 'react';
import '../../index_fxy.css';
import { Link } from 'react-router-dom';
import Chat from 'chat-react';
import { NavBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './mychat.css'

const t = new Date().getTime();
const local = window.location.hash.split('/');
var all=[];
var arr=[];
var arr1=[];
var arr2=[]; 
export default class MyChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      say:'',
      inputValue: '',
      userid:'',
      username : '',
      avatar : '',
      data:'',
      messages:[],
      userdata:[],
      className: 'hidden'
    };
   
}
  handleScroll() { 
    if (document.documentElement.scrollTop > 630) {
      this.setState({
        className: 'show'
      })
    } 
  }
  componentDidMount(){
    window.onscroll = () => this.handleScroll()
    // var tip = this.props.match.path.slice(17,20);
    fetch('http://localhost:5000/login', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
        })
        .then(res => res.json())
        .then(res => {
            console.log(res[0])
            this.setState({
                userid: res[0].user_id,
                username: res[0].username,
                avatar: res[0].avatar,
            })
        }
        ).then(()=>{
            console.log("?????????????????????????????"+this.state.userid);
    })
    fetch('http://localhost:5000/loginlist', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    userdata: res
                })
            }
            ).then(()=>{
                console.log(this.state.userdata);
      })
    fetch('http://localhost:5000/chatroomeye?id='+this.props.match.params.id,{
        method:'GET', 
        headers: {'Content-Type': 'application/json; charset=utf-8'}
    })
    .then(res=>res.json())
    .then(res=>{
        this.setState({
          data:res[0]
        })
    })
    .then(()=>{
      
      if(this.state.data.user_id.indexOf(',') != -1) {
        arr = this.state.data.user_id.split(',')
      }
      if(this.state.data.user_id.indexOf(',') != -1) {
        arr1 = this.state.data.message.split(',')
      }
      if(this.state.data.user_id.indexOf(',') != -1) {
        arr2 = this.state.data.time.split(',')
      };
      var len=arr.length;
      for(var i=0;i<len;i++){
        var obj={};
        obj.timestamp=arr2[i];
        obj.avatar='http://localhost:5000/img?imgname='+"0.jpg";
        obj.name="username";
        obj.userId= arr[i];
        obj.value=arr1[i];
        all.push(obj);
      }
      console.log(111111111111111111111111111111)
      console.log(all)
    })

    
    
  }
  // componentWillMount(){
  //   fetch('http://localhost:5000/chatroomeye?id='+this.props.match.params.id,{
  //     method:'GET', 
  //     headers: {'Content-Type': 'application/json; charset=utf-8'}
  //   })
  //   .then(res=>res.json())
  //   .then(res=>{
  //       this.setState({
  //         data:res
  //       })
  //   })
  // }
  // componentDidUpdate(prevProps,prevState){        
  //   if((prevProps.match.params.id!==this.props.match.params.id) || (prevState.tips1 != this.state.tips1) || (prevState.tips2 != this.state.tips2)){
  //       let id = this.props.match.params.id
  //       fetch('http://localhost:5000/apphome/hometab/details/',
  //       {method:'GET'})
  //       .then((res)=>res.json())
  //       .then((res)=>{
  //           this.setState({
  //               dataItem:res
  //           })                
  //       })
  //   }

  // }
  sendMessage = () => {
    var useridarr = [];
    if(this.state.data.user_id) {
        useridarr = this.state.data.user_id.split(',')
    }
    useridarr.push(this.state.userid)
    useridarr = useridarr.join(',')
    console.log(useridarr)

    var messagearr = [];
    if(this.state.data.message) {
        messagearr = this.state.data.message.split(',')
    }
    messagearr.push(this.state.say)
    messagearr = messagearr.join(',')
    console.log(messagearr)

    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth();
    var day=date.getDate();
    var hour=date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();
    if (hour<10) {
        hour='0'+hour;
    }
    if (minute<10) {
        minute='0'+minute;
    }
    if (second<10) {
        second='0'+second;
    }
    var time=year+'/'+month+'/'+day+'/'+hour+':'+minute+':'+second;

    var timearr = [];
    if(this.state.data.time) {
        timearr = this.state.data.time.split(',')
    }
    timearr.push(time)
    timearr = timearr.join(',')
    console.log(timearr)

    fetch('http://localhost:5000/chatroomeye',{
      method:'POST', 
      headers: {'Content-Type': 'application/json; charset=utf-8'},
      body: JSON.stringify({
        userid:useridarr,
        eyeid :this.props.match.params.id,
        time:timearr,
        message:messagearr
      })})
    .then(res=>res.json())
    .then(res=>{
      console.log('消息存储成功')
    })
  }
  change = (e) => {
    this.setState({
      say: e.target.value
    })
  }
  onUser = (username)=>{
    this.props.history.push('/apphome/hometab/member');
  }
  render(){
    var style1;
    var style2;
    var style3;
    var style4;
    var style5;

    var a
    return (
     
      <div style={{ width:'100%',height: '100%', background: "white",zIndex:99999,position:'fixed',top:0,bottom:0}}>
                  
        <NavBar mode="light" style={{width:'100%',background: '#8794a8', color: 'black'}}
          leftContent={[
            <Link to={'/apphome/hometab/details/'+this.props.match.params.id} style={{ color: 'black' }}><i style={{ fontSize: 22, lineHeight: '22px', marginLeft: '-10px' }} className='iconfont icon-fanhui'></i></Link>,
          ]}
        >聊天室</NavBar>
        <div className={this.props.className} style={{width: '100%',height:'550px',backgroundColor: '#fff',position:'absolute',overflow:'auto'}}>
        {
          all.map((item,index)=>{
            console.log(this.state.userid);
            if(item.userId==this.state.userid){
              style1={
                position:"relative",
                width:"100%",
                height:"80px",
                marginBottom:"10px"
              }
              style2={
                width:"60px",
                height:"60px",
                borderRadius:"30px",
                marginTop:"20px",
                marginLeft:"15px"
              }
              style3={
                width:"auto",
                height:"10px",
                marginLeft:"10px",
              }
              style4={
                color:"white",
                position:"absolute",
                top:"50px",
                left:"75px",
                width:"auto",
                height:"30px",
                paddingLeft:"15px",
                paddingRight:"15px",
                lineHeight:"30px",
                borderRadius:"15px",
                background:"#8794a8",
                marginLeft:"10px",
              }
              style5={

              }
            }else{
              style1={
                position:"relative",
                width:"100%",
                height:"80px",
                marginBottom:"10px"

              }
              style2={
                width:"60px",
                height:"60px",
                borderRadius:"30px",
                position:"absolute",
                top:"20px",
                right:"15px"
              }
              style3={
                position:"absolute",
                top:"20px",
                right:"85px",
                width:"auto",
                height:"10px",
              }
              style5={
                position:"absolute",
                top:"20px",
                right:"190px",
                width:"60px",
                height:"10px",
              }
              style4={
                color:"white",
                position:"absolute",
                top:"50px",
                right:"85px",
                width:"auto",
                height:"30px",
                paddingLeft:"15px",
                paddingRight:"15px",
                lineHeight:"30px",
                borderRadius:"15px",
                background:"#8794a8",
                marginLeft:"10px",
              }
            }
            return(
            <div style={style1}>
             
              {
                this.state.userdata.map((a,index)=>{
                  if(a.user_id==item.userId){
                    return(
                      <img src={'http://localhost:5000/img?imgname=' + a.avatar} style={style2}/>
                    )
                  }
                })
              }
              
             
              {
                this.state.userdata.map((a,index)=>{
                  if(a.user_id==item.userId){
                    return(
                    <span style={style3}>{a.username}</span>
                    )
                  }
                })
              }
              <span style={style5}>&nbsp;&nbsp;&nbsp;{item.timestamp}</span>
              <span style={style4}>
                {item.value}
              </span>

             
              
            </div>
            )
          })
        }   
        </div>    
        <div style={{width:'100%',height:"40px",background: '#8794a8', color: 'black',bottom:"0px",position:'absolute' }}>
            <div style={{marginTop:"10px"}}>
                {/* <div style={{width:"10px",height:"40px",background: 'white'}}>表情</div> */}
                <input style={{width:"50%",borderRadius:"20px"}}  onChange={this.change} value={this.state.say}/>
                <input style={{width:"40px",borderRadius:"10px",marginLeft:"20px",color:"#8794a8",textAlign:"center"}} value='发送' onClick={()=>this.sendMessage()}/>
            </div>
        </div>
      </div>
    )
  }
}
