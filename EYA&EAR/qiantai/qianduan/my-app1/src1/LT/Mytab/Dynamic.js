import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import { Accordion, List } from 'antd-mobile';
import { Grid } from 'antd-mobile';
import { Tabs, WhiteSpace, Badge,ImagePicker } from 'antd-mobile';
import {HashRouter  as Router,withRouter,Route,Link,Switch,Redirect} from 'react-router-dom';

const data = Array.from(new Array(17)).map((_val, i) => ({
  icon: './img/夜晚.png',
  text: `name${i}`,
}));

const tabs = [
    { title: <i className='iconfont icon-lianjie' 
    style={{fontSize:30,color:'black',height:30,width:30,marginBottom:5,float:'left'}} ></i> },
    { title: <i className='iconfont icon-chaohua' 
    style={{fontSize:30,color:'black',height:30,width:30,marginBottom:5,float:'left'}} ></i> },
    { title: <i className='iconfont icon-biaoqing' 
    style={{fontSize:30,color:'black',height:30,width:30,marginBottom:5,float:'left'}} ></i> },
    { title: <i className='iconfont icon-gengduo' 
    style={{fontSize:30,color:'black',height:30,width:30,marginBottom:5,float:'left'}} ></i> }
  ];
  

export default class Dynamic extends Component {
    onChange = (key) => {
        console.log(key);
      }
      state={
            files: data,
          }

      componentDidMount() {
        //this.autoFocusInst.focus();
      }
      onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
        });
      }
      handleClick = () => {
        this.inputRef.focus();
      }
    render() {
        const { files } = this.state;
        return (
            <div style={{width:"100%",height:"100%"}}>
                <div style={{background:"#8794a8",width:'100%',height:"40px"}}>
                    <Link to='/apphome' style={{color:'black'}}><i className='iconfont icon-web-icon-' 
                        style={{fontSize:30,color:'black',height:35,width:35,marginBottom:5,float:'left'}} ></i></Link>
                    <button style={{float:'right',background:'#8794a8',
                    fontSize:18,marginTop:8,marginRight:10,border:'none',textAlign:'center'}}>发布</button>
                </div>   
                <div style={{width:"100%",height:""}}>               
                  <textarea style={{width:"100%",border:'none',rows:"10"}} 
                  type="text" placeholder="说点什么吧...">
                  
                  </textarea>
                  <ImagePicker
                      onChange={this.onChange}
                      onImageClick={(index, fs) => console.log(index, fs)} 
                      style={{marginTop:"200px"}}
                      accept="image/gif,image/jpeg,image/jpg,image/png"
                      />
                      
                        <Tabs tabs={tabs}
                            initialPage={1}
                            onChange={(tab, index) => { console.log('onChange', index, tab); }}
                            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                            style={{height:"20%"}} 
                        >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            <a>选择添加链接</a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            <a>选择添加超话</a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            <a>点击获取更多表情</a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            <a>点击更多...</a>
                            </div>
                        </Tabs>
            
                </div>
            </div>
        )
    }
}
