import React, { Component } from 'react';
import { NavBar, Icon,Tabs ,Carousel,Grid,Drawer, List,SegmentedControl,WhiteSpace,Button,Pagination} from 'antd-mobile';
import {HashRouter  as Router,withRouter,Route,Link,Switch,Redirect} from 'react-router-dom';
const tabs = [
    { title: '详情' },
    { title: '购买须知' },
  ];
  const locale = {
    prevText: '-',
    nextText: '+',
  };
  
export default class Shop_detail_one extends Component {
    state = {
        data: ['15','10'],
        imgHeight: 200,
        open: true,
        dataImg:[
            {img:'./images/12.png'},
            {img:'./images/12.png'},
            {img:'./images/12.png'},
            {img:'./images/12.png'}
          ]
    }
    render(){
        return(
            <div>
            <NavBar mode="light" style={{background:'#8794a8',color:'black'}}
                leftContent={[
                    <Link to='/apphome' style={{color:'black'}}><i style={{fontSize:22,lineHeight:'22px',marginLeft:'-10px'}} className='iconfont icon-fanhui'></i></Link>,
                ]}
                onLeftClick={this.onOpenChange}
                rightContent={[
                <i style={{fontSize:22,lineHeight:'22px',marginRight:'8px'}} className='iconfont icon-gouwuche'></i>
                
            ]}
            ></NavBar>
            <div>
                    <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    style={{width: '100%', height: this.state.imgHeight,margin:'0 auto'}}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            
                        <img
                            //src={require(`./images/${val}.png`)}
                            src={`./images/${val}.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}   //图片记得写上宽度百分之百
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            // this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
                <p style={{width:'90%',margin:'0 auto'}}>世界原版经典音乐剧《猫》CATS 【2020中国“猫”年震撼回归】</p>
            </div>
            <div style={{width:'90%',margin:'0 auto',border:'0px solid #8794a8',marginTop:'20px'}}><h1 style={{margin:'0 auto',fontSize:'25px'}}>城市</h1> <SegmentedControl
                values={['北京', '上海', '南京']}
                tintColor={'#8794a8'}
                style={{ height: '40px', width: '250px'}}
                />
            </div>
            <div style={{width:'90%',margin:'0 auto',border:'0px solid #8794a8'}}><h1 style={{margin:'0 auto',fontSize:'25px'}}>场次</h1> <SegmentedControl
                values={['北京', '上海', '南京']}
                tintColor={'#8794a8'}
                style={{ height: '40px', width: '250px'}}
                />
            </div>
            <div style={{width:'90%',margin:'0 auto',border:'0px solid #8794a8'}}><h1 style={{margin:'0 auto',fontSize:'25px'}}>票价</h1> <SegmentedControl
                values={['北京', '上海', '南京']}
                tintColor={'#8794a8'}
                style={{ height: '40px', width: '250px'}}
                />
            </div>
            <div  style={{width:'90%',margin:'0 auto',marginTop:'20px',color:'white'}}>
                <Pagination total={'20000'} current={1} locale={locale} />
            </div>
            
            <Button style={{width:'90%',margin:'0 auto',backgroundColor:'#ccc0d4',marginTop:'20px',color:'white'}}>立即购买</Button>
            <Link to='/apphome/shoptab/cart'><Button style={{width:'90%',margin:'0 auto',backgroundColor:'#ccc0d4',marginTop:'20px',color:'white'}}>加入购物车</Button></Link>
            

            <div>
                <WhiteSpace />
                <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '350px', backgroundColor: '#fff' }}>
                <ul style={{listStyle:'none',margin:'0 auto'}}>
                        {
                            this.state.dataImg.map((item,index)=>(
                            <li style={{height:'180px',width:'90%',margin:'20px auto',border:'1px solid #8794a8'}} key={index}>
                                <img style={{height:'180px',width:'100%',margin:'0px auto'}} src={item.img}/>   
                            </li>
                            ))
                        }
                </ul> 
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '350px', backgroundColor: '#fff' }}>
                    Content of second tab
                </div>
                </Tabs>
                <WhiteSpace />
            </div>
        </div>
        )
    }
    
}

