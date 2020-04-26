import React, { Component } from 'react'
import { List, InputItem, TextareaItem, Grid,NavBar,Toast } from 'antd-mobile';
import { HashRouter as Router, withRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

export default class buy extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    componentDidMount() {
        fetch('http://localhost:5000/cartlist', {
            "method": "get",
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                list:res
            })
            console.log(this.state.list);
        })
        
            
    }
    render() {
        // 支付页面
        return (
            <div>
                <NavBar mode="light" style={{ background: '#8794a8', color: 'black' }}
                    leftContent={[
                        <Link to='/apphome/shoptab/cart' style={{ color: 'black' }}><i style={{ fontSize: 22, lineHeight: '22px', marginLeft: '-10px' }} className='iconfont icon-fanhui'></i></Link>,
                    ]}
                >支付页面</NavBar>
                <div style={{backgroundColor:'#eee',width:'100%',height:572,paddingTop:50}}>
                    <div style={{backgroundColor:'#fff',width:'80%',height:300,margin:'0 auto',fontSize:20,paddingTop:30}}>
                        {this.state.list.map((item, index) =>
                            {
                                if(item.gstate=='支付中'){
                                    return(
                                        <p style={{textAlign:'center',paddingBottom:30}}>¥<span style={{fontSize:30}}>{item.gPrice2}</span></p>
                                    )
                                }
                            }
                        )}
                        <p style={{width:'100%',height:30}}>
                            <span style={{fontSize:20,float:'left'}}>支付宝账号</span>
                            <span style={{fontSize:20,float:'right'}}>152******31</span>
                        </p>
                        <p style={{width:'100%',height:30,paddingBottom:60}}>
                            <span style={{fontSize:20,float:'left'}}>付款方式</span>
                            <span style={{fontSize:20,float:'right'}}>余额宝</span>
                        </p>
                        <p style={{width:'100%',height:30,fontSize:18,textAlign:'center'}}>
                            <span>请验证指纹或者</span>
                            <Link to='/apphome/shoptab/pay'><span style={{color:'blue'}}>密码验证</span></Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
