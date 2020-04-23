import React, { Component } from 'react'
import { Tabs, Grid } from 'antd-mobile';
import { HashRouter as Router, withRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
const tabs = [
    { title: '动态' },
    { title: '聊天室' }
];
const data = [
    { icon: 'images/5.png' },
    { icon: 'images/8.png' },
    { icon: 'images/9.png' }
];

export default class Community extends Component {
    constructor() {
        super();
        this.state = {
            dataItem: [
                { img: './images/5.png', title: '毕加索画展的群' },
                { img: './images/10.png', title: '皮影展的群' },
                { img: './images/8.png', title: '毕加索画展的群' },
                { img: './images/9.png', title: '毕加索画展的群' },
            ],
            data: [],
            name: [],

        }
    }
    componentDidMount() {
        fetch('http://localhost:5000/active', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res

                })
            })
        fetch('http://localhost:5000/login', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    name: res[0]
                })
                console.log(this.state.name);
            }
            )
    }
    state = {
        name: [],
        dataItem: [
            { img: './images/5.png', title: '毕加索画展的群' },
            { img: './images/10.png', title: '皮影展的群' },
            { img: './images/8.png', title: '毕加索画展的群' },
            { img: './images/9.png', title: '毕加索画展的群' },
        ]
    };


    render() {
        return (
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <div style={{ width: '100%', backgroundColor: '#8794a8', height: '50px' }}>
                    <p style={{ margin: '0 auto', fontSize: 18, textAlign: 'center', lineHeight: '50px' }}>社区</p>
                </div>
                <div style={{ height: '93%', width: '100%', paddingTop: 30, position: 'fixed' }}>
                    <Link to='/apphome/mytab/dynamic'><div style={{ position: 'absolute', right: 10, top: 45, fontSize: 20 }} className='iconfont icon21'></div></Link>
                    <div style={{ height: '18%', margin: 15 }}>
                        <div style={{
                            width: 80,
                            height: 80,
                            borderRadius: 20,
                            backgroundImage: 'url(' + 'http://localhost:5000/img?imgname=' + this.state.name.avatar + ')',
                            backgroundSize: '120% 100%',
                            float: 'left',
                            marginRight: 15
                        }}></div>
                        <p style={{ margin: 0, fontSize: 25, }}>{this.state.name.username}</p>
                        <button style={{ backgroundColor: '#8794a8', width: 50, height: 25, marginTop: 15, marginLeft: 1, marginRight: 10, backgroundColor: '#fff', border: '1px solid #d4d4d4', borderRadius: 5, fontSize: 15 }}>
                            粉丝<span>{this.state.name.like_number}</span>
                        </button>
                        <button style={{ backgroundColor: '#8794a8', width: 50, height: 25, marginTop: 15, backgroundColor: '#fff', border: '1px solid #d4d4d4', borderRadius: 5, fontSize: 15 }}>
                            关注<span>{this.state.name.liked_number}</span>
                        </button>
                    </div>
                    <div style={{ borderTop: '1px solid #fff', height: '100%', backgroundColor: '#fff' }}>
                        <Tabs tabs={tabs}
                            initialPage={0}
                            destroyInactiveTab={true}
                            tabBarUnderlineStyle={{ backgroundColor: 'white', border: 'none' }}
                            tabBarActiveTextColor={'#8794a8'}
                            // animated={false}
                            swipeable={true}
                            style={{ backgroundColor: '#8794a8' }}
                        >
                            {
                                tabs.map(item => {
                                    if (item.title == '动态') {
                                        return (
                                            <ul style={{ listStyle: 'none', margin: '0px auto',height:'150%' }}>
                                                {
                                                    this.state.data.map((item, index) => (

                                                        <li style={{ height: '110px', width: '95%', margin: '0 auto', marginBottom: '10px', border: '1px solid #8794a8' }} key={index}>
                                                            <img style={{ width: '90px', height: '90px', float: 'left' }} src={'http://localhost:5000/img?imgname=' + item.img1} />
                                                            <div style={{ display: 'inline-block', marginLeft: '10px' }}>
                                                                <p style={{ overflow: 'hidden', width: '200px', height: '40px' }}>{item.content}</p>
                                                                <p>{item.time}</p>
                                                            </div>
                                                        </li>

                                                    ))
                                                }
                                            </ul>
                                        )
                                    } else if (item.title == '聊天室') {
                                        return (

                                            <ul style={{ listStyle: 'none', margin: '0px auto',height:'150%'  }}>
                                                {
                                                    this.state.dataItem.map((item, index) => (
                                                        // <Link to={'/details/'+index}>
                                                        <Link to='/apphome/mytab/chat1'>
                                                            <li style={{ height: '110px', width: '95%', margin: '0 auto', marginBottom: '10px', border: '1px solid #8794a8' }} key={index}>
                                                                <img style={{ width: '90px', height: '90px', float: 'left' }} src={item.img} />
                                                                <div style={{ display: 'inline-block', marginLeft: '10px' }}>
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
