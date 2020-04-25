import React, { Component } from 'react'
import './Cart.css'
import { List, InputItem, TextareaItem, Grid,NavBar,Toast } from 'antd-mobile';
import ListItem from './ListItem';
import { HashRouter as Router, withRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
var finished=0;
export default class cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [],//购物车数据
            data1: [
                { icon: './img/18.jpg', tit: '开心麻花《皇帝的新娘》' },
                { icon: './img/13.jpg', tit: '2020新年音乐会' },
                { icon: './img/17.jpg', tit: '舞剧《梁祝》' },
                { icon: './img/14.jpg', tit: '《冰上迪士尼-勇敢追梦》' },
                { icon: './img/15.jpg', tit: '汉秀' },
                { icon: './img/16.jpg', tit: '“笙声不息”交响乐团音乐会' },
            ],
            hasError: false,
            value: '',
            order_name:'',
            order_tell:'',
            order_address:''
        };
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
        .then(res=>{
            // console.log(this.state.list)
        })
        
            
    }

    change1 = (e) => {
        console.log(e);
        this.setState({
            order_name: e
        })
    }
    change2 = (value,e) => {
        if (value.replace(/\s/g, '').length < 11) {
          this.setState({
            hasError: true,
          });
        } else {
          this.setState({
            hasError: false,
          });
        }
        this.setState({
          value,
          order_tell:e
        });
    }
    change3 = (e) => {
        this.setState({
            order_address: e
        })
    }

    getConnect = () => {  //api请求函数
        console.log(this.state.order_name);
        console.log(this.state.order_tell);
        console.log(this.state.order_address);
        console.log(this.state.list[1].gName);
        fetch('http://localhost:5000/apphome/shoptab/cartlist',{
          method:'POST', 
          headers: {'Content-Type': 'application/json; charset=utf-8'},
          body: JSON.stringify({
            order_name:this.state.order_name,
            order_tell:this.state.order_tell,
            order_address:this.state.order_address,
            gName:this.state.list[1].gName
          })})
        .then(res=>{
        //   console.log('22')
          res.json()
        })
        .then(res=>{
        //   console.log('1');
          // if(res.state) {
            window.alert('获取成功！');      
        } 
        )
    }
    updateFinished(todoItem) {
        var sum=0;
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

    updateTotal(todoItem){
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
                            onChange={this.change1}
                            style={{ width: '100%' }}
                            placeholder="请输入您的名字"
                            ref={el => this.labelFocusInst = el}
                        >
                            <div onClick={() => this.labelFocusInst.focus()} >收货人</div>
                        </InputItem>
                        <InputItem
                            error={this.state.hasError}
                            onErrorClick ={ () => {
                                if (this.state.hasError) {
                                  Toast.info('请输入正确的手机号');
                                }
                            }}
                            onChange={this.change2}
                            placeholder="请输入您的电话"
                            value={this.state.value}
                        >
                            <div onClick={() => this.labelFocusInst.focus()} style={{ float: 'left' }}>收货电话</div>
                        </InputItem>
                        {/* <InputItem
                            ref={el => this.labelFocusInst = el}
                        >
                            <div onClick={() => this.labelFocusInst.focus()}>收货省区</div>
                        </InputItem> */}
                        <TextareaItem
                            title="详细地址"
                            placeholder="请输入详细地址"
                            data-seed="logId"
                            autoHeight
                            onChange={this.change3}
                            ref={el => this.customFocusInst = el}
                        />
                    </List>
                </div>
                <p id="wen">以下是您选购的商品</p>
                <div className="container" style={{width:'100%',overflow:'scroll',marginBottom:'20px'}}>
                    <ul style={{width:'100%'}}>
                        {this.state.list.map((item, index) =>
                            {
                                if(item.gstate=='未付款'){
                                    return(
                                        <ListItem
                                            item={item}
                                            finishedChange={this.updateFinished.bind(this)}
                                            totalChange={this.updateTotal.bind(this)}
                                            key={index}/>
                                    )
                                }
                            }
                        )}
                    </ul>
                    {/* <Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/> */}
                </div>
                <div style={{width:'100%',height:30,paddingRight:20}}>
                    {/* <span style={{ display: 'block', paddingLeft: '50%', margin: 0, float: 'left' }}>
                        已选中：{finished}
                    </span> */}
                    <Link to='/apphome/shoptab/buy'>
                        <button style={{
                            height: 40, width: 80, border: '1px solid rgb(241, 98, 42)',
                            borderRadius: '5px', marginLeft: 15, color: 'white',
                            background: 'rgb(241, 98, 42)',
                            textAlign: 'center',
                            float:'right'
                        }} onClick={this.getConnect}>
                            购买
                        </button>
                    </Link>
                    
                </div>
                <div className="Cbottom">
                    <p style={{ display: 'inline-block', fontSize: 20, border: '1px solid #bbb', padding: '10px 10px', borderRadius: '10px',marginTop:"25px",marginLeft:'120px',textAlign:'center' }}>猜你喜欢</p>
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
