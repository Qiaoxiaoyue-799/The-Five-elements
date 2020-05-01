import React, { Component } from 'react'
import { Flex, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom'
import { Icon } from 'antd-mobile';
import './Find.css'
export default class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: '',
      pwd: '',
      newPwd: '',
    }
    this.tip1 = true;
    this.tip2 = true;
    this.tip3 = true;
  }
  change1 = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  blur1 = (e) => {
    var tipName = document.getElementsByClassName('tipName')[0];
    var con = e.target.value;
    if (con == '') {
      this.tip1 = false;
      tipName.innerHTML = '用户名不能为空'
    } else {
      this.tip1 = true;
      tipName.innerHTML = ''
    }
  }

  change2 = (e) => {
    this.setState({
      pwd: e.target.value
    })
  }
  blur2 = (e) => {
    var con = e.target.value;
    var tipPwd = document.getElementsByClassName('tipPwd')[0];
    var reg1 = /^[0-9]*$/g;
    var reg2 = /[`~!@#$%^&*()\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/g;
    if ((con.match(reg1) || con.match(reg2)) && con !== '') {
      this.tip2 = false;
      tipPwd.innerHTML = '仅支持字符和下划线且不为纯数字';
    }
    else if (con == '') {
      this.tip2 = false;
      tipPwd.innerHTML = '密码不能为空';
    } else {
      var len = 0;
      for (var i = 0; i < con.length; i++) {
        // 如果是中文，就+2；否则+1
        if (con[i].match(/^[\u4e00-\u9fa5]{0,}$/)) {
          len += 2;
        } else {
          len += 1;
        }
        if (len > 14) {
          break;
        }
      }
      if (len > 14) {
        this.tip2 = false;
        tipPwd.innerHTML = '最长14个英文或7个汉字';
      } else {
        this.tip3 = true;
        tipPwd.innerHTML = '';
      }
    }
  }

  change3 = (e) => {
    this.setState({
      newPwd: e.target.value
    })
  }
  blur3 = (e) => {
    var con = e.target.value;
    var tipNewPwd = document.getElementsByClassName('tipNewPwd')[0];
    if (con == this.state.pwd) {
      this.tip3 = true;
      tipNewPwd.innerHTML = ''
    } else {
      this.tip3 = false;
      tipNewPwd.innerHTML = '密码输入不一致'
    }
  }

  getConnect = () => {  //api请求函数    
    var tipName = document.getElementsByClassName('tipName')[0];
    var tipPwd = document.getElementsByClassName('tipPwd')[0];
    var tipNewPwd = document.getElementsByClassName('tipNewPwd')[0];
    if (this.tip1 == true && this.tip2 == true && this.tip3 == true) {
      alert("修改成功")
      fetch('http://localhost:5000/users/find', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          username: this.state.name,
          password: this.state.pwd
        })
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          this.props.history.push('/login');
        })
    } else if (this.tip1 == false) {
      tipName.innerHTML = '用户名不能为空';
    } else if (this.tip2 == false) {
      tipPwd.innerHTML = '密码不能为空';
    } else if (this.tip3 == false) {
      tipNewPwd.innerHTML = '密码输入不一致';
    }
  }
  up = () => {

  }
  render() {
    return (
      <div style={{ width: '100%', textAlign: 'center', background: '#fff' }}>
        <div style={{ width: '100%', height: '40px', background: 'rgb(149, 170, 184)' }}>
          <p style={{ position: 'absolute', left: 0 }}><Icon onClick={() => { this.props.history.go(-1) }} style={{ width: '30px', height: '30px', position: 'relative', top: '5px' }} type="left" /><span style={{ width: '60px', height: '40px', position: 'absolute', top: 10 }}>找回密码</span></p>
        </div>
        <WhiteSpace />
        <Flex align="start">
          <div className='find'>
            <form className='form'>
              <input onChange={this.change1} placeholder='username' name='username' onBlur={this.blur1} value={this.state.name} />
              <p className='tip tipName'></p>
              <input onChange={this.change2} type="password" placeholder='new password' name='new-password' onBlur={this.blur2} value={this.state.pwd} />
              <p className='tip tipPwd'></p>
              <input onChange={this.change3} type="password" placeholder='confirm password' name="confirm-password" onBlur={this.blur3} value={this.state.newPwd} />
              <p className='tip tipNewPwd'></p>
              <input value='确定' className='button' type='button' name='button' onClick={this.getConnect} style={{ background: '#8693a6', color: '#fff', textAlign: 'center', borderRadius: '15px', width: '75%' }} />
            </form>
          </div>
        </Flex>
        <WhiteSpace />
      </div>
    )
  }
}
