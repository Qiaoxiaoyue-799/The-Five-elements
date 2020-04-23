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
    messages: [
      {
        timestamp: t,
        userInfo: {
          avatar: "http://img.binlive.cn/6.png",
          name: "小E",
          userId: "0"
        },
        value: "你好！"
      },
      {
        timestamp: t,
        userInfo: {
          avatar: "http://img.binlive.cn/6.png",
          name: "小E",
          userId: "0"
        },
        value: "一起来聊天吧！",
        error: true
      }],
    timestamp: new Date().getTime()
  }
  username = '';
  avatar = '';
  componentDidMount(){
    fetch('http://localhost:5000/users/chatroom',{
      method:'POST', 
      headers: {'Content-Type': 'application/json; charset=utf-8'},
      body: JSON.stringify({
        id:local[local.length-1],
        data:JSON.stringify(this.state.messages)
      })})
    .then(res=>res.json())
    .then(res=>{
      console.log('消息存储成功')
    })
    fetch('http://localhost:5000/login',{
      method:'GET', 
      headers: {'Content-Type': 'application/json; charset=utf-8'}
      })
    .then(res=>res.json())
    .then(res=>{
      this.username = res[0].username;
      this.avatar = 'http://localhost:5000/img?imgname='+res[0].avatar;
      // console.log(res[0],this.username,this.avatar)
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
    const { value } = v;
    if (!value) return;
    var v1 ={
      timestamp: new Date().getTime(),
      userInfo: {
        avatar: "http://img.binlive.cn/6.png",
        name: "小E",
        userId: "0"
      },
      value: value,
      error: true
    }
    const { messages = [] } = this.state;
    messages.push(v);
    messages.push(v1);
    this.setState({ messages, timestamp: new Date().getTime(), inputValue: '' });
  }
  onChange = (key) => {
    console.log(key);
  }
  onUser = (username)=>{
    this.props.history.push('/apphome/hometab/member');
  }
  render() {
    console.log(this.avatar)
    const { inputValue, messages, timestamp } = this.state;
    const userInfo = {
      avatar: this.avatar,
      userId: "59e454ea53107d66ceb0a598",
      name: this.username
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
          timestamp={timestamp}
          placeholder="请输入"
          avatarClick={this.onUser}
          messageListStyle={{ width: '100%', height: '80%', color: 'black', background: 'white',top:30,overflow:'auto'}}
        />
      </div>
    )
  }
}
