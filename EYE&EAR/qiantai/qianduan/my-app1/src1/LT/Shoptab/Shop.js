import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { SearchBar,WhiteSpace, Tabs ,Grid } from 'antd-mobile';

import Shop_publish from './Shop_publish';
const ticketContent = {
    id:1,
    tImg: "./images/朗.jpg",
    tName: "pic"
};
const artContent = {
    id:1,
    aImg: "./images/朗.jpg",
    aName: "pic"
};
const souvenirContent = {
    id:1,
    sImg: "./images/朗.jpg",
    sName: "pic"
};
const art = Array.from(new Array(9)).map(() => ({
    icon: artContent.aImg,
    id:artContent.id
}));
const ticket = Array.from(new Array(9)).map(() => ({
    icon: ticketContent.tImg,
    id:ticketContent.id
}));
const souvenir = Array.from(new Array(9)).map(() => ({
    icon: souvenirContent.sImg,
    id:souvenirContent.id
}));

const tabs = [
    { title: '票类'},
    { title: '艺术品'},
    { title: '发布'},
];    
const TabExample = () => (
    <div style={{ height: 600}}>
      <WhiteSpace />
      <Tabs tabs={tabs}
        initialPage={0}
        tabBarPosition="left"
        tabDirection="vertical"
      >
        <div style={{alignItems: 'center', backgroundColor: '#fff' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;<h5 style={{marginTop:'-10px'}}>&nbsp;&nbsp;&nbsp;&nbsp;音乐会</h5>
          <Grid data={ticket}
            columnNum={3}
            renderItem={dataItem => (
                <Link to='/apphome/shoptab/shop_detail_one'>
                    <div>
                        <img src={dataItem.icon} style={{width: '67px', height: '67px'}} alt="" />
                        <div style={{ color: '#888', fontSize: '14px' }}>
                        <span>{ticketContent.tName}</span>
                        </div>
                    </div>
                </Link>
            )}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;<h5 style={{marginTop:'-10px'}}>&nbsp;&nbsp;&nbsp;&nbsp;演唱会</h5>
            <Grid data={ticket}
                columnNum={3}
                renderItem={dataItem => (
                    <Link to='/apphome/shoptab/shop_detail_one'>
                        <div>
                            <img src={dataItem.icon} style={{width: '67px', height: '67px'}} alt="" />
                            <div style={{ color: '#888', fontSize: '14px' }}>
                            <span>{ticketContent.tName}</span>
                            </div>
                        </div>
                    </Link>
                )}
                />
        </div>
        <div style={{  alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;<h5 style={{marginTop:'-10px'}}>&nbsp;&nbsp;&nbsp;&nbsp;刺绣</h5>
            <Grid data={art}
                columnNum={3}
                renderItem={dataItem => (
                    <Link to='/apphome/shoptab/shop_detail_two'>
                        <div>
                            <img src={dataItem.icon} style={{width: '67px', height: '67px'}} alt="" />
                            <div style={{ color: '#888', fontSize: '14px' }}>
                            <span>{artContent.aName}</span>
                            </div>
                        </div>
                    </Link>
                )}
            />
        </div>
        <div style={{ alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
            <Shop_publish/>
        </div>
        
      </Tabs>
      <WhiteSpace />
    </div>
  );
export default class Goods extends Component {
    constructor() {
        super();
        this.state={
            style:{
                zIndex: '100',
                width: '100%',
                height: 'auto',
                background: 'white',
                position: '',
                transition: 'all  1s linear',
                fontSize: '25px',
            }
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll=(event)=>{
        let ctx=this;
        let scrollTop  = document.documentElement.scrollTop;  //滚动条滚动高度
        if(scrollTop>100){
            ctx.setState({ style: {
                zIndex: '100',
                width: '100%',
                height: 'auto',
                background: '#dcd9dd',
                fontSize: '25px', 
                position: "fixed",
                top:0,
                left:0 ,
                transition: 'all  1s linear'
            } })
        }else
        {
            ctx.setState({ style: {
                zIndex: '100',
                width: '100%',
                height: 'auto',
                background: 'white',
                fontSize: '25px' ,
                position: '',
                transition: 'all  1s linear',
            }})
        }    
    }
    render() {
        return (
            <div className='box'>
                <div className='header' onWheel={(e) => this.handleScroll(e)} style={this.state.style}>
                    <SearchBar placeholder="搜索商品" maxLength={8} />
                </div>
                <TabExample/>
            </div>
        )
    }
}
