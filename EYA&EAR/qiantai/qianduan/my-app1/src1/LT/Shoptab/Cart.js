import React, { Component } from 'react'
import './Cart.css'
import { List, InputItem, TextareaItem,Grid} from 'antd-mobile';
import ListItem from './ListItem';

export default class cart extends Component {
    constructor () {
		super();

		this.state = {
			list: [{
				id: 0,
                title: '儿童剧《西游记之三打白骨精》',
                price:'¥66.6',
                num:1,
				status: 0
			}, {
				id: 1,
                title: '儿童剧《西游记之三打白骨精》',
                price:'¥66.6',
                num:1,
				status: 0
			}, {
				id: 2,
                title: '儿童剧《西游记之三打白骨精》',
                price:'¥66.6',
                num:1,
				status : 0
			}],
            finished: 0,
            data1:[
                {icon:'./img/11.jpg',tit:'开心麻花《皇帝的新娘》'},
                {icon:'./img/12.jpg',tit:'2020新年音乐会'},
                {icon:'./img/13.jpg',tit:'舞剧《梁祝》'},
                {icon:'./img/14.jpg',tit:'《冰上迪士尼-勇敢追梦》'},
                {icon:'./img/15.jpg',tit:'汉秀'},
                {icon:'./img/16.jpg',tit:'“笙声不息”交响乐团音乐会'},
            ]
		};
	}

	updateFinished (todoItem) {
		var sum = 0;
		this.state.list.forEach( (item) => {
			if (item.id === todoItem.id) {
				item.status = todoItem.status;
			}
			if (item.status === 1) {
				sum++;
			}
		
		});
		this.setState({
			finished: sum
		});
	}

	updateTotal (todoItem) {
		var obj = [], sum = 0;
		this.state.list.forEach((item) => {
			if (item.id !== todoItem.id) {
				obj.push(item);
				if (item.status === 1 ) {
					sum++;
				}
			}
		});
		this.setState({
			list: obj,
			finished: sum
		});
	}
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleClick = () => {
        this.inputRef.focus();
    }
    render() { 
        // var a = this.state.list.length-this.state.finished;
        return (
            <div>
                <div className="Ctop">
                    <i className="iconfont icon-ico_leftarrow" style={{fontSize:20,color:'black',paddingTop:10,height:30,float:'left'}}></i>
                    <p style={{display:'block',fontSize:18,color:'black',paddingTop:10,margin:0,textAlign:'center'}}>购物车</p>
                </div>
                <div className="Cb1">
                    <List>
                        <InputItem
                            style={{width:'100%'}}
                            placeholder="请输入您的名字"
                            ref={el => this.labelFocusInst = el}
                        >
                            <div onClick={() => this.labelFocusInst.focus()}>收货人</div>
                        </InputItem>
                        <InputItem
                            placeholder="请输入您的电话"
                            ref={el => this.labelFocusInst = el}
                        >  
                            <div onClick={() => this.labelFocusInst.focus()} style={{float:'left'}}>收货电话</div>
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
                <div className="container">
                    <ul>
                            { this.state.list.map ((item, index) =>
                                <ListItem 
                                    item={item}
                                    finishedChange={this.updateFinished.bind(this)} 
                                    totalChange={this.updateTotal.bind(this)}
                                    key={index}
                                />
                            )}
                        <li>
                            <span style={{display:'block',paddingLeft:'50%',margin:0,float:'left'}}>
                                已选中：{this.state.finished}
                            </span>
                            <button style={{height:30,width:80,border:'1px solid rgb(241, 98, 42)',
                            borderRadius:'5px',marginLeft:15,color:'white',
                            background:'rgb(241, 98, 42)'}}>
                                购买
                            </button>
                        </li>
                    </ul>
                    {/* <Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/> */}
                </div>
                <div className="Cbottom">
                    <p style={{display:'inline-block',fontSize:20,border:'1px solid #bbb',padding:'10px 10px',borderRadius:'10px'}}>猜你喜欢</p>
                    <Grid data={this.state.data1}
                        // style={{border:'1px solid #fff'}}
                        columnNum={2}
                        renderItem={dataItem => (
                            <div>
                                <div style={{width:'100%',height:140,paddingTop:20}}>
                                <img src={dataItem.icon} style={{ width: '120px', height: '130px' }} alt="" />
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
