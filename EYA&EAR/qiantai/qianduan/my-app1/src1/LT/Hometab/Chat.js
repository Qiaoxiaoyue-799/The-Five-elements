import React, { Component } from 'react';
import '../../index_fxy.css';
import {Link} from 'react-router-dom'
// import {Native} from 'react-router-dom';
// import Sendmessage from './Sendmessage';
// import Todolist from './ToDolist/Todolist'
import { Accordion, List } from 'antd-mobile';
import Todoing from './ToDolist/Todoing';
import Todoinput from './ToDolist/Todoinput';
import { Grid } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

const data = Array.from(new Array(17)).map((_val, i) => ({
  icon: './img/夜晚.png',
  text: `name${i}`,
}));
const GridExample = () => (
  <div>
    <div className="sub-title">Carousel</div>
    <Grid data={data} isCarousel onClick={_el => console.log(_el)} />
  </div>
);

export default class Chat extends Component {
  onChange = (key) => {
    console.log(key);
  }
    constructor(...args) {
        super(...args);
        this.state = {
          todo:[],
            a:100,
            b:100
        };
      }
      
     
    addItem = (data) => {
        //this.state.todo.push(data);
        this.setState({
            todo:[...this.state.todo,data]
        })
    }
    delItem = (idx)=>{ 
       
        let todo = [...this.state.todo]//拷贝
        todo.splice(idx,1);
    
    }
    render() {
        return (
            <div style={{height:"100%",width:"100%"}}>
                <div style={{position:'fixed',background:"#8794a8",width:'100%',height:'40px',textAlign:'center'}}>
                    <Link to='/apphome/hometab/details'><i className='iconfont icon-web-icon-' 
                    style={{fontSize:30,color:'black',height:35,width:35,marginBottom:5,float:'left'}} ></i></Link>
                    <h3 style={{display:'inline-block',width:60,marginTop:9}}>XX圈子</h3>
                    <img src="./images/16.jpg" style={{width:33,height:33,float:'right',borderRadius:'10px',marginTop:5}}/>
                </div>
                <Todoing todo={this.state.todo} del={this.delItem}/>
                {/* <i className='iconfont icon-yuyin' 
                    style={{fontSize:30,color:'black',height:35,width:35,marginBottom:5,float:'left'}} ></i> */}
                  <Accordion defaultActiveKey="0" 
                  style={{position:'absolute',bottom:0,width:'100%',height:'44px',background:'#8794a8'}} 
                  onChange={this.onChange}>
                    <Accordion.Panel header={ 
                    <Todoinput add={this.addItem}/>}>
                    <Grid data={data} isCarousel onClick={_el => console.log(_el)} />
                    </Accordion.Panel>
                  </Accordion>
            </div>
        )
    }
}
