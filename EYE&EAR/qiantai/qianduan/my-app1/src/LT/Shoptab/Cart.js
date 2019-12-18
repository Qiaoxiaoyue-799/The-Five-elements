import React, { Component } from 'react'
import './Cart.css'
import { List, InputItem, TextareaItem, Grid,NavBar } from 'antd-mobile';
import ListItem from './ListItem';
import { HashRouter as Router, withRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
var finished=0;
export default class cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [],
            data1: [
                { icon: './img/18.jpg', tit: '开心麻花《皇帝的新娘》' },
                { icon: './img/13.jpg', tit: '2020新年音乐会' },
                { icon: './img/17.jpg', tit: '舞剧《梁祝》' },
                { icon: './img/14.jpg', tit: '《冰上迪士尼-勇敢追梦》' },
                { icon: './img/15.jpg', tit: '汉秀' },
                { icon: './img/16.jpg', tit: '“笙声不息”交响乐团音乐会' },
            ]
        };
        
       

	
    }

    updateFinished(todoItem) {
        var sum=0
        this.state.list.forEach((item) => {
           
            if (item.id === todoItem.id) {
                item.gstatus = todoItem.status;
            }
            if (item.gstatus === 1) {
                sum++;
                
                
            }
            finished=sum
        });
        // console.log(this.finished)
        
    }

    updateTotal(todoItem) {
        var obj = [], sum = 0;
        this.state.list.forEach((item) => {
            if (item.id !== todoItem.id) {
                obj.push(item);
                if (item.status === 1) {
                    sum++;
                }
            }
        });
        // this.finished=sum
        this.setState({
            list: obj,
            
        });
    
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
        })
        .then(res=>{
            console.log(this.state.list)
        })
        
            
    }
    handleClick = () => {
        this.inputRef.focus();
    }
    
    render() {
    
        // var a = this.state.list.length-this.state.finished;
        return (
            <div style={{width: '100%',height:'108%',backgroundColor: '#fff',zIndex:999,position:'absolute',overflow:'auto'}}>
                <NavBar mode="light" style={{ background: '#8794a8', color: 'black' }}
                    leftContent={[
                        <Link to='/apphome' style={{ color: 'black' }}><i style={{ fontSize: 22, lineHeight: '22px', marginLeft: '-10px' }} className='iconfont icon-fanhui'></i></Link>,
                    ]}
                    >购物车</NavBar>
                <div className="Cb1">
                    <List>
                        <InputItem
                            style={{ width: '100%' }}
                            placeholder="请输入您的名字"
                            ref={el => this.labelFocusInst = el}
                        >
                            <div onClick={() => this.labelFocusInst.focus()}>收货人</div>
                        </InputItem>
                        <InputItem
                            placeholder="请输入您的电话"
                            ref={el => this.labelFocusInst = el}
                        >
                            <div onClick={() => this.labelFocusInst.focus()} style={{ float: 'left' }}>收货电话</div>
                        </InputItem>
                        <InputItem
                            ref={el => this.labelFocusInst = el}
                        >
                            <div onClick={() => this.labelFocusInst.focus()}>收货省区</div>
                        </InputItem>
                        <TextareaItem
                            title="详细地址"
                            placeholder="请输入详细地址"
                            data-seed="logId"
                            autoHeight
                            ref={el => this.customFocusInst = el}
                        />
                    </List>
                </div>
                <p id="wen">以下是您选购的商品</p>
                <div className="container" style={{width:'100%',height:'56%',overflow:'scroll',marginBottom:'30px'}}>
                    <ul>
                     
                       
                        {this.state.list.map((item, index) =>
                            
                            <ListItem
                                item={item}
                                finishedChange={this.updateFinished.bind(this)}
                                totalChange={this.updateTotal.bind(this)}
                                key={index}
                            />
                          
                        )}
                        <li style={{position:'absolute',bottom:0,right:0}}>
                            {/* <span style={{ display: 'block', paddingLeft: '50%', margin: 0, float: 'left' }}>
                                已选中：{finished}
                            </span> */}
                            <button style={{
                                height: 40, width: 80, border: '1px solid rgb(241, 98, 42)',
                                borderRadius: '5px', marginLeft: 15, color: 'white',
                                background: 'rgb(241, 98, 42)',
                                textAlign: 'center',
                                float:'right'
                            }}>
                                购买
                            </button>
                        </li>
                    </ul>
                    {/* <Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/> */}
                </div>
                <div className="Cbottom">
                    <p style={{ display: 'inline-block', fontSize: 20, border: '1px solid #bbb', padding: '10px 10px', borderRadius: '10px' }}>猜你喜欢</p>
                    <Grid data={this.state.data1}
                        // style={{border:'1px solid #fff'}}
                        columnNum={2}
                        renderItem={dataItem => (
                            <div>
                                <div style={{ width: '100%', height: 140, paddingTop: 20 }}>
                                    <img src={dataItem.icon} style={{ width: '120px', height: '100px' }} alt="" />
                                </div>
                                <div >{dataItem.tit}</div>
                                {/* style={{fontSize:25,color:'black',height:80,width:80,paddingTop:1,float:'left'}} */}
                            </div>
                        )}
                    />
                </div>
            </div>
        )
    }
}
