import React, { Component } from 'react';
import '../../index_fxy.css';
import {Link} from 'react-router-dom'
// import {Native} from 'react-router-dom';
// import Sendmessage from './Sendmessage';
// import Todolist from './ToDolist/Todolist'
import { Accordion, List } from 'antd-mobile';
// import Todoing from './ToDolist/Todoing';
// import Todoinput from './ToDolist/Todoinput';
import { Grid } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import MyChat from './MyChat';

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
                <MyChat/>
            </div>
        )
    }
}
