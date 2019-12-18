import React, { Component } from 'react'
import { Tabs,Grid } from 'antd-mobile';
import {HashRouter  as Router,withRouter,Route,Link,Switch,Redirect} from 'react-router-dom';
const tabs = [
    { title: '动态' },
    { title: '聊天室' }
  ];
  const data = [
      {icon:'images/5.png'},
      {icon:'images/8.png'},
      {icon:'images/9.png'}
  ]
export default class Community extends Component {
    state = {
        dataItem:[
          {img:'./images/5.png',title:'毕加索画展的群'},
          {img:'./images/10.png',title:'皮影展的群'},
          {img:'./images/8.png',title:'毕加索画展的群'},
          {img:'./images/9.png',title:'毕加索画展的群'},
        ]
      };
    render() {
        return (
            <div style={{position: 'absolute',width:'100%',height:'100%'}}>
                <div style={{position:'fixed',padding:'5px 0 5px 10px',zIndex:5,fontSize:22,width:'100%',backgroundColor:'#8794a8'}}>
                    <p style={{margin:'0 auto',fontSize:18}}>社区</p>
                </div>
                <div style={{height:'93%',width:'100%',paddingTop:30,position:'fixed'}}>
                    <Link to='/apphome/mytab/dynamic'><div style={{position:'absolute',right:10,top:45,fontSize:20}} className='iconfont icon21'></div></Link>
                    <div style={{height:'18%',margin:15}}>
                        <div style={{
                                    width:80,
                                    height:80,
                                    borderRadius:20,
                                    backgroundImage:'url('+'/images/16.jpg'+')',
                                    backgroundSize:'120% 100%',
                                    float:'left',
                                    marginRight:15
                                }}></div>
                        <p style={{margin:0,fontSize:25,}}>Kika Kong</p>
                        <button style={{backgroundColor:'#8794a8',width:50,height:25,marginTop:15,marginLeft:1,marginRight:10,backgroundColor:'#fff',border:'1px solid #d4d4d4',borderRadius:5,fontSize:15}}>
                            粉丝<span>0</span>
                        </button>
                        <button style={{backgroundColor:'#8794a8',width:50,height:25,marginTop:15,backgroundColor:'#fff',border:'1px solid #d4d4d4',borderRadius:5,fontSize:15}}>
                            关注<span>0</span>
                        </button>
                    </div>
                    <div style={{borderTop:'1px solid #fff',height:'100%',backgroundColor:'#fff'}}>
                        <Tabs tabs={tabs}
                            initialPage={0}
                            destroyInactiveTab={true}
                            tabBarUnderlineStyle={{backgroundColor:'white',border:'none'}}
                            tabBarActiveTextColor={'#8794a8'}
                            // animated={false}
                            swipeable={true}
                            style={{backgroundColor:'#8794a8'}}
                            >
                                {
                                    tabs.map(item=>{
                                            if(item.title == '动态'){
                                                return <div style={{ display: 'flex', height: '100%', backgroundColor: '#fff'}}>
                                                            <div style={{width:'100%',height:'33%',borderBottom:'1px dotted #d4d4d4'}}>
                                                                <Grid data={data}
                                                                    columnNum={3}
                                                                    hasLine={false}
                                                                    renderItem={dataItem => (
                                                                        <img src={dataItem.icon} style={{ width:'90%' }} alt="" />
                                                                    )}
                                                                    />
                                                                <div style={{height:'30%',margin:'0 5px 0 5px'}}>
                                                                    <p style={{fontSize:12,marginLeft:4,marginTop:6}}>你好</p>
                                                                    <p style={{fontSize:10,color:'#d4d4d4'}}><span style={{marginRight:6}}>分类</span><span>444条评论</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                            }else if(item.title == '聊天室'){
                                                return (
                                                    
                                                       <ul style={{listStyle:'none',margin:'0px auto'}}>
                                                            {
                                                                this.state.dataItem.map((item,index)=>(
                                                                // <Link to={'/details/'+index}>
                                                                <Link to='/apphome/mytab/chat'>
                                                                <li style={{height:'110px',width:'95%',margin:'0 auto',marginBottom:'10px',border:'1px solid #8794a8'}} key={index}>
                                                                    <img style={{width:'90px',height:'90px',float:'left'}} src={item.img}/>
                                                                    <div style={{display:'inline-block',marginLeft:'10px'}}>
                                                                    <h2>{item.title}</h2>
                                                                    
                                                                    </div>
                                                                </li>
                                                                </Link>
                                                                ))
                                                            }
                                                        </ul> 
                                                        
                                                    )
                                               
                                            }
                                        }
                                    )
                                }
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
