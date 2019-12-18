import React, { Component } from 'react'
import { Flex, WhiteSpace } from 'antd-mobile';
import {Link} from 'react-router-dom'
import './indexldq.css'
const axios = require('axios');
const querystring = require('querystring');
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: '',
      pwd: '',
      mobile: ''
    }
  }
  change1 = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  change2 = (e) => {
    this.setState({
      pwd: e.target.value
    })
  }
  change3 = (e) => {
    this.setState({
      mobile: e.target.value
    })
  }
  getConnect = () => {  //api请求函数    
    fetch('http://localhost:5000/register',{
      method:'POST', 
      headers: {'Content-Type': 'application/json; charset=utf-8'},
      body: JSON.stringify({
        username:this.state.name,
        password:this.state.pwd,
        mobile:this.state.mobile
      })})
    .then(res=>res.json())
    .then(res=>{
      console.log(res)
      if(res.state) {
        this.props.history.push('/login');        
      }else {
        window.alert('验证失败，输入格式有误，请重新输入');
      //   this.setState({
      //     data:res[0]
      //   })
      }
    } 
    )
  }
  render() {
      return (
          <div style={{width:'100%',textAlign:'center',background:'#fff'}}>        
          <WhiteSpace />
          <p>注册</p>
          <Flex align="start">
            <div className='placeholder'>
              <div className='img' style={{position:'relative'}}>
                  <img src='./images/register.png' style={{width:'60px',height:'65px'}}/>
                  <span style={{position:'absolute',right:'-8px',bottom:'-10px',color:'black',fontSize:'20px'}}>+</span>
              </div>
              <form className='form'>
                <input name='username' placeholder='username' value={this.state.name} onChange={this.change1} />
                <input onChange={this.change3} placeholder='mobile' name='mobile' value={this.state.mobile}/>
                <input type="password" placeholder='密码' name="password" id="" value={this.state.pwd} onChange={this.change2} />
                <p></p>
                {/* <input value='注册'  onClick={this.getConnect} style={{background:'#8693a6',color:'#fff'}}/> */}
                <input  value='注册 ' onClick={this.getConnect} style={{ background: '#8693a6', color: '#fff' ,textAlign:'center'}}/>
              </form>
            </div>
          </Flex>
          <p><Link style={{color:'#bbb'}} to='/login'>已有账号了？点击登录</Link></p>
          <WhiteSpace />
        </div>
      )
  }
}
