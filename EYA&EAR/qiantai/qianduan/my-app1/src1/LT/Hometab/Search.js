import React, { Component } from 'react'
import {HashRouter  as Router,withRouter,Route,Link,Switch,Redirect} from 'react-router-dom';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './Search.css';
export default class Search extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
        this.userChange = this.userChange.bind(this);
        this.state={
            search:'',
            todo:[],
        }

    }
    delAll = (e) =>{
        this.setState({
            todo:[]
        })
    }
    addItem = (data) => {
        //this.state.todo.push(data);
        this.setState({
            todo:[...this.state.todo,data]
        })
    }
    delItem = (idx)=>{ 
        let todo = [...this.state.todo]//拷贝
        // let a=todo.length;
        todo.splice(idx,1);
        this.setState({
            todo:todo
        })
    }
    handleInput = (e) =>{
        //绑定this，事件处理函数写成箭头函数，或者用bind绑定
        if(e.keyCode === 13){
            //console.log(e.target.value);//获得输入的值
            this.addItem(e.target.value);//调用这个属性的函数
        }
        // e.target.value="";
        console.log("input");
    }
    handleChange = (e) => {
        // this.setState({
        //     // 必须加[],不然非法
        //     search:e.target.value
        // })
        this.setState({search: e.target.value })
        console.log("change");
    }
    userChange(e){
        this.setState({ search : e.target.value })
        console.log("userchange");

    }
    onChange= (value) => {
    this.setState({ value });
    };
    clear = () => {
    this.setState({ value: '' });
    };
    handleClick = () => {
    this.manualFocusInst.focus();
    }
    render() {
        return (
            <div>
                {/* 搜索栏 */}
                <div style={{width:'100%',height:40}}>
                    <Link to='/apphome'><i className="iconfont icon-fanhui" style={{fontSize:30,color:'black',height:40,paddingTop:5,float:'left'}}></i></Link>
                    <input
                        name='search'
                        // value={this.state.value}
                        style={{margin:'6px 5px',padding:0,width:'78%',height:30,float:'left',background:'none',borderRadius:'15px',border:'1px solid gray'}}
                        placeholder="请输入关键词"
                        onSubmit={value => console.log(value, 'onSubmit')}
                        // onClear={value => console.log(value, 'onClear')}
                        onFocus={() => console.log('onFocus')}
                        onBlur={() => console.log('onBlur')}
                        onCancel={() => console.log('onCancel')}
                        // onChange={this.handleChange.bind(this)} 
                        onChange={this.userChange} 
                        onKeyDown={this.handleInput}
                    />
                    <button 
                    style={{float:'right',marginTop:10,borderRadius:'15px',
                    padding:0,width:40,height:26,
                    background:'gray',color:'white'}}
                    // onClick={this.handleInput2}
                    >搜索</button>
                </div>
                {/* 热门搜索 */}
                <div id="s1">
                    <p>全网热推</p>
                    <ul>
                        <li>周杰伦2019“嘉年华”巡回演唱会</li>
                        <li>德云社相声</li>
                        <li>希腊雅典爱乐乐团</li>
                        <li>开心麻花《乌龙山伯爵》</li>
                        <li>儿童剧《西游记之三打白骨精》</li>
                    </ul>
                </div>
                {/* 历史搜索栏 */}
                <div id="s1">
                    <p>搜索发现</p>
                    <ul>
                        {
                            this.state.todo.map((item,idx)=>
                            <li key={idx}>
                                {item}
                            </li>)
                        }
                    </ul>
                    <span onClick={(e)=>this.delAll(e)}>清除历史记录</span>
                </div>
            </div>
        )
    }
}
