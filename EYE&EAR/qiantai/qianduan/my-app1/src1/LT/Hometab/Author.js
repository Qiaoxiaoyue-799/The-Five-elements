import React, { Component } from 'react'
import {HashRouter  as Router,withRouter,Route,Link,Switch,Redirect} from 'react-router-dom';

export default class Author extends Component {
    render() {
        return (
            <div style={{position: 'absolute',width:'100%',height:'100%'}}>
                <Link to='/apphome/hometab/details'><div style={{position:'fixed',top:10,left:10,zIndex:5,fontSize:22}} className='iconfont iconreturn'></div></Link>
                <div style={{height:'50%',overflow:'hidden'}}><img src='/img/11.jpg' style={{height:'100%'}}/></div>
                <div style={{height:'35%'}}>
                    <div style={{height:'40%',margin:15}}>
                        <div style={{
                                    width:80,
                                    height:80,
                                    borderRadius:20,
                                    backgroundImage:'url('+'/img/12.jpeg'+')',
                                    backgroundSize:'120% 100%',
                                    float:'left',
                                    marginRight:15
                                }}></div>
                        <p style={{margin:0,fontSize:22,fontWeight:'bolder',}}>Kika Kong</p>
                        <button style={{width:50,height:25,float:'right',marginTop:25,marginLeft:30,backgroundColor:'#fff',border:'1px solid #d4d4d4',borderRadius:5}}>粉丝<span>0</span></button>
                        <button style={{width:50,height:25,float:'right',marginTop:25,backgroundColor:'#fff',border:'1px solid #d4d4d4',borderRadius:5,}}>关注<span>0</span></button>
                    </div>
                    <div style={{border:'1px solid #d4d4d4',height:'60%',margin:15,borderRadius:5}}>
                                        
                    </div>
                </div>
                <div style={{height:'7%',width:'100%',position:'fixed',bottom:0}}>
                    <button style={{width:'50%',height:'100%',float:'left',border:0,backgroundColor:'#8bc34a',color:'#fff'}}>关注</button>
                    <button style={{width:'50%',height:'100%',float:'left',border:0,backgroundColor:'#d4d4d4'}}>私信</button>
                </div>
            </div>
            
        )
    }
}
