import React, { Component } from 'react'
import './vip.css';
import { Icon } from 'antd-mobile';
import {HashRouter  as Router,withRouter,Route,Link,Switch,Redirect} from 'react-router-dom';
import { Grid,Steps,WhiteSpace,NavBar } from 'antd-mobile';
const Step = Steps.Step;
const steps = [{
    title: '1级',
    description: '',
  }, {
    title: '2级',
    description: '',
  }, {
    title: '3级',
    description: '',
  }, {
    title: '..',
    description: '',
  }].map((s, i) => <Step key={i} title={s.title} description={s.description} />);
  
export default class VIP extends Component {
    state={
        data1:[
            {icon:'iconfont icon-chongzhi',tit:'充值'},
            {icon:'iconfont icon-wodehezi',tit:'私人搭配'},
            {icon:'iconfont icon-huiyuan-',tit:'选购指南'},
            {icon:'iconfont icon-yifu',tit:'外观'},
            {icon:'iconfont icon-huiyuan',tit:'会员福利'},
            {icon:'iconfont icon-zu',tit:'更多'},
        ]
    }
    render() {
        return (
            <div style={{width: '100%',height:'108%',backgroundColor: '#fff',zIndex:999,position:'absolute'}}>
                <NavBar mode="light" style={{ background: '#8794a8', color: 'black' }}
                    leftContent={[
                        <Link to='/apphome' style={{ color: 'black' }}><i style={{ fontSize: 22, lineHeight: '22px', marginLeft: '-10px' }} className='iconfont icon-fanhui'></i></Link>,
                    ]}
                    >会员中心</NavBar>
                <div className="Vheader">
                    <div className="Vmessage">
                        <img src="./images/16.jpg" id="Vtou" style={{width:80,height:80}}></img>
                        <p id="Vname">KIki</p>
                        <p id="Vdevelop">成长值：0</p>
                        <p id="Vgrade">积分：0</p>
                    </div>
                </div>
                <div className="Vbody">
                    <div className="Vb1" style={{marginTop:'15px'}}><p>会员等级</p></div>
                    <div className="Vb2">
                        
                        <WhiteSpace/>
                        <Steps current={1} direction="horizontal" size="small">
                            {steps}
                        </Steps>
                        <WhiteSpace />
                    </div>
                </div>
                <div className="Vbottom">
                    <div className="Vb1"><p>会员特权</p></div>
                    <Grid data={this.state.data1}
                        columnNum={3}
                        renderItem={dataItem => (
                            <div id="homeimg">
                                <div style={{width:'100%',height:60}}>
                                {
                                    <i className={dataItem.icon} style={{fontSize:50,color:'black',height:60,width:80,textAlign:'center'}} ></i>
                                }
                                </div>
                                <div id="Vp">{dataItem.tit}</div>
                                {/* style={{fontSize:25,color:'black',height:80,width:80,paddingTop:1,float:'left'}} */}
                            </div>
                        )}
                    />
                </div>
            </div>
        )
    }
}
