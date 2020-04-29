import React, { Component } from 'react';
import '../../index_fxy.css';
import { Link } from 'react-router-dom';
import Chat from 'chat-react';
import { NavBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './mychat.css'

const t = new Date().getTime();
const local = window.location.hash.split('/');
export default class MyChat extends Component {
  state = {
    inputValue: '',
    userid:'',
    username : '',
    avatar : '',
    data:"",
    messages:[]
  };
  componentWillMount(){
    var tip = this.props.match.path.slice(17,20);
    fetch('http://localhost:5000/login', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                userid: res[0].user_id,
                username: res[0].username,
                avatar: res[0].avatar,
            })
        }
        ).then(()=>{
            console.log(this.state.userid);
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
      var arr=this.state.data.user_id.split(',');
      var arr1=this.state.data.message.split(',');
      var arr2=this.state.data.time.split(',')
      var arr3=this.state.data.user_id.split(',')
      var len=arr.length
      for(var i=0;i<len;i++){
        var obj={}
        obj.timestamp=arr2[i]
        var innnerobj={}
        innnerobj.avatar='http://localhost:5000/img?imgname='+"0.jpg";
        innnerobj.name="username";
        innnerobj.userId= "userid";
        obj.userInfo=innnerobj;
        obj.value=arr1[i];
        this.state.messages.push(obj)
        console.log(this.state.messages)
      }
    })
    fetch('http://localhost:5000/chatroom'+tip+'?id='+this.props.match.params.id,{
      method:'GET', 
      headers: {'Content-Type': 'application/json; charset=utf-8'}
      })
    .then(res=>res.json())
    .then(res=>{
      console.log(res);
      this.setState({
        message:res
      })
      console.log(this.state.message)
    })
  }
  
  setInputfoucs = () => {
    this.chat.refs.input.inputFocus();  //set input foucus
  }
  setScrollTop = () => {
    this.chat.refs.message.setScrollTop(1200);  //set scrollTop position
  }
  sendMessage = (v) => {
    console.log(v)
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
    messagearr.push(v.value)
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
  onChange = (key) => {
    console.log(key);
  }
  onUser = (username)=>{
    this.props.history.push('/apphome/hometab/member');
  }
  render() {
    const { inputValue,messages} = this.state;
    const userInfo = {
      avatar:'http://localhost:5000/img?imgname='+this.state.avatar,
      userId: this.state.userid,
      name: this.state.username
    };
    return (
      <div style={{ width:'100%',height: '100%', background: "white",zIndex:99999,position:'fixed',top:0,bottom:0}}>
        <NavBar mode="light" style={{width:'100%',background: '#8794a8', color: 'black' }}
          leftContent={[
            <Link to={'/apphome/hometab/details/'+this.props.match.params.id} style={{ color: 'black' }}><i style={{ fontSize: 22, lineHeight: '22px', marginLeft: '-10px' }} className='iconfont icon-fanhui'></i></Link>,
          ]}
        >聊天室</NavBar>

        <Chat
          style={{ width: '100%', height: '100%', position: 'fixed', top: 30 }}
          ref={el => this.chat = el}
          dataSource={messages}
          userInfo={userInfo}
          value={inputValue}
          sendMessage={this.sendMessage}
          // timestamp={timestamp}
          placeholder="请输入"
          avatarClick={this.onUser}
          messageListStyle={{ width: '100%', height: '80%', color: 'black', background: 'white',top:30,overflow:'auto'}}
        />
      </div>
    )
  }
}
