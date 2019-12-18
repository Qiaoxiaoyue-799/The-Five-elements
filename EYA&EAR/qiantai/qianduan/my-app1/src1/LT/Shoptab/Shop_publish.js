import React, { Component } from 'react';
import { NavBar,WingBlank,SegmentedControl,ImagePicker,InputItem,List,WhiteSpace,Button} from 'antd-mobile';

const data = [];

export default class Shop_publish extends Component {
    state = {
        files: data,
      }
      componentDidMount() {
        //this.autoFocusInst.focus();
      }
      onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
        });
      }
      handleClick = () => {
        this.inputRef.focus();
      }
     
      
  render() {
  

    const { files } = this.state;
   
    return (
      <div>
        {/* <NavBar mode="light" style={{background:'#8794a8',color:'black'}}
                leftContent={[
                    <i style={{fontSize:22,lineHeight:'22px',marginLeft:'-10px'}} className='iconfont icon-fanhui'></i>,
                ]}
                onLeftClick={this.onOpenChange}
            >发布</NavBar> */}

        <div style={{width:'100%',height:'200px',backgroundColor:'#7a727f'}}>
            <div style={{width: '80px',height:'80px',margin:'0px auto'}}>
            <img src={`./images/16.jpg`} style={{marginTop:'20px',width: '80px',height:'80px',border:'1px solid black',borderRadius:"50%"}} />
            </div>
            {/* <Button style={{width:'60%',margin:'0 auto',backgroundColor:'#8794a8',marginTop:'40px',color:'white'}}>充值会员即可发布</Button> */}
            <p style={{width:'90%',margin:'0 auto',marginTop:'40px',color:'white',textAlign:'center'}}>亲爱的会员，快来发布你的艺术品吧</p>
        </div>
        <List>
          <InputItem
            
            placeholder="输入标题"
          >标题
          </InputItem>
          <InputItem
            style={{height:'1000px'}}
            placeholder="相关描述"
          >相关描述
          </InputItem>
        </List>
        <List>
          <InputItem
            placeholder="0.00"
            extra="¥"
          >价钱</InputItem>
        </List>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 5}
          accept="image/gif,image/jpeg,image/jpg,image/png"
        />
        <Button style={{width:'90%',margin:'0 auto',backgroundColor:'#7a727f',marginTop:'120px',color:'white'}}>发布</Button>
      </div>
    );
  }
}


