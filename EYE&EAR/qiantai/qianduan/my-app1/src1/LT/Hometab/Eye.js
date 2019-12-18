import React, { Component } from 'react';
import { NavBar,Carousel,Grid, SearchBar,SegmentedControl,ListView,Accordion,List} from 'antd-mobile';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom';





export default class Eye extends Component {

  state = {
    data:[
      {icon:'iconfont icon-huazhan',tit:'画展'},
      {icon:'iconfont icon-sheying',tit:'摄影展'},
      {icon:'iconfont icon-songdance',tit:'话剧'},
      {icon:'iconfont icon-diaosu2',tit:'雕塑展'},
      {icon:'iconfont icon-sydney1162852easyiconnet',tit:'歌剧'},
      {icon:'iconfont icon-feiyihuicuichuantongjiyi-_huaban',tit:'非遗展'},
      {icon:'iconfont icon-gu-',tit:'古物展'},
      {icon:'iconfont icon-shuben',tit:'书展'},
    ],
    dataItem:[
      {img:'./images/5.png',title:'毕加索画展',time:'xxxxxx',Content:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'},
      {img:'./images/10.png',title:'毕加索画展',time:'xxxxxx',Content:'xxxxxxxxx'},
      {img:'./images/8.png',title:'毕加索画展',time:'xxxxxx',Content:'xxxxxxxxx'},
      {img:'./images/9.png',title:'毕加索画展',time:'xxxxxx',Content:'xxxxxxxxx'},
    ]
  };


  onChange = (key) => {
    console.log(key);
  }
  render() {
    return (
      <div>
        <NavBar mode="light" style={{background:'#8794a8',color:'black'}}
            leftContent={[
                <Link to='/apphome' style={{color:'black'}}><i style={{fontSize:22,lineHeight:'22px',marginLeft:'-10px'}} className='iconfont icon-fanhui'></i></Link>,
            ]}
        >EYE</NavBar>
    
        <SearchBar placeholder="Search" maxLength={8} />
        <Grid data={this.state.data}
                        columnNum={4}
                        renderItem={dataItem => (
                            <div style={{border:'1px solid #8794a8',backgroundColor:'#8794a8'}}>
                                <div style={{width:'100%',height:50}}>
                                {
                                    <i className={dataItem.icon} style={{fontSize:40,color:'black',height:40,width:40,textAlign:'center'}} ></i>
                                }
                                </div>
                                <div>{dataItem.tit}</div>
                          
                            </div>
                        )}
                    />
        <div>
        <Accordion defaultActiveKey="1" className="my-accordion" onChange={this.onChange} >
            <Accordion.Panel header="更多">
              <List className="my-list" >
                <List.Item  style={{background:'#8794a8'}}>木偶展</List.Item>
                <List.Item  style={{background:'#8794a8'}}>手工展</List.Item>
              </List>
            </Accordion.Panel>
        </Accordion>
        </div>
        <ul style={{listStyle:'none',margin:'10px auto'}}>
          {
            this.state.dataItem.map((item,index)=>(
              // <Link to={'/details/'+index}>
              <Link to='/apphome/hometab/details'>
              <li style={{height:'110px',width:'95%',margin:'0 auto',marginBottom:'10px',border:'1px solid #8794a8'}} key={index}>
                <img style={{width:'80px',height:'80px',float:'left'}} src={item.img}/>
                <div style={{display:'inline-block',marginLeft:'10px'}}>
                <h2>{item.title}</h2>
                <div style={{width:'200px',height:'80px',overflow:'hidden',display:'inline-block',color:'block'}}><h1 style={{fontSize:'15px'}}>{item.Content}</h1></div>
                </div>
              </li>
              </Link>
            ))
          }
        </ul> 
         
      </div>
    );
  }
}
