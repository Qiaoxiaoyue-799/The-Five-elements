import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Details.css'

const content =  {
    Title:'美术的诞生:从太阳王到拿破仑——巴黎国立高等美术学院珍藏展',
    // First_type: "apphome/hometab/eye",
    // Tab_id: "演唱会",
    Author:'赫本',
    avatar: './images/16.jpg',
    Content:`<p align="left">&nbsp;&nbsp;&nbsp;&nbsp;2002年岁末，神话开始。2003年秋冬，走向高潮和终极。《无间道》即自承取乎佛家理念，光明与黑暗、生存与消亡、存在与虚无纠结于混然一体，愕然分崩离析，亦是丰富兼统一的过程。有因就有果，有孽就有缘，境与相的妙处在于言诠的限度，不可道破，又不可沉默，相互依托。心音始终在，拷问自我，拷问时空。这是最好的时代，这是最坏的时代，几乎每个时代的人都在这么说。然而《维摩诘经·观众生品第七》中说：无住则无本。从身体的言行开始，经过辩难言说的层面，初步达到存有自视境界，最后不过是归结为生存的态度。在我看来，刘健明、陈永仁、韩琛、黄志诚、倪永孝、陆启昌、杨锦荣、沈澄等人其实是宿命中的镜像人物，都可以从对方身上看到自我，抗争、迸发、沉雄、挥洒，仿佛的劫数、扭曲的生命，于是乎“无间道”。</p>　 
    <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;顾准说从理想主义到经验主义，王小波说要警惕僭主和英雄，谁是英雄？他们从哪里来？他们来了又怎样？我们这个时代还要不要英雄？我在编辑这期E论坛时，有一些欣慰，从文字中可以看出大家都在思考，毕竟我们不再是盲从的一代。在我看来，娱乐从来就不仅仅是娱乐本身，从一滴水、一朵花、一粒沙可以看到一个世界，从一场电影中我们想到的注定更多，理解定可变奏无穷。我们每个人就构成了这个世界，无论这个世界是好是坏，我们都有份。我们每个人都有自己的生活，都有优点都有缺点，这是我们共同进步的基础。</p> `,
    Img:'./images/赫本.jpg',
    Article_id:'' 
}
export default class Details extends Component {
    constructor() {
        super();
        this.state={
            style:{
                zIndex: '100',
                width: '100%',
                height: '50px',
                background: '#8794a8',
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
                <div className="header" onWheel={(e) => this.handleScroll(e)} style={this.state.style}>
                    <p className='p1'><Link to={'/'+content.First_type}><span style={{fontSize:'35px'}}className="iconfont icon-htmal5icon37"></span></Link></p>                    
                    <Link to='/apphome/hometab/author' style={{marginLeft:'1px',display:"inline-block",float:'left',marginTop:'5px'}}>
                        <img src={content.avatar}/>
                        &nbsp;
                        <span>{content.Author}</span>
                    </Link>
                    <div style={{display:'inline-block',float:'right',padding:'1px 7px'}}>
                        <Link to='/apphome/hometab/chat'>
                            <button>进入圈子</button>
                        </Link>
                    </div>
                </div>
                <div className='part1'>
                    <img className='img-responsive' src={content.Img}/>
                </div>
                <p></p>
                <div className='part2 container'>
                    <ol className='breadcrumb' >
                        <li><Link to={'/'+content.First_type}>{content.First_type}</Link></li> 
                        <li className="active">{content.Tab_id}</li> 
                    </ol>
                    <h3>
                        {content.Title}
                    </h3>                                      
                    <div dangerouslySetInnerHTML={{ __html: content.Content }}>
                    </div>                   
                </div>
            </div>
        )
    }
}
