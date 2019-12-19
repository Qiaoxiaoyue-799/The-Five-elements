import React, { Component } from 'react';

class ListItem extends Component {
	constructor (props) {
		super(props);
		this.state={
			style:{backgroundColor: '#fff',float:'left',marginTop:'20',display:'block'}
		}
		// this.handleFinished = this.handleFinished.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	} 

	handleFinished=(item)=>{

		item.gstatus = (item.gstatus === 0 ? 1 : 0);
		if(item.gstatus===1){
			this.setState({
				style:{backgroundColor: 'black',float:'left'}
			})
		}
		if(item.gstatus===0){
			this.setState({
				style:{backgroundColor: '#fff',float:'left'}
			})
		}
		var obj = {
			id: item.id,
			name: item.gName,
			status: item.gstatus
		}
		
		this.props.finishedChange(obj);	
	}

	handleDelete =(item)=> {
		this.props.totalChange(this.props.item);
			fetch('http://localhost:5000/cart2',{
				method:'POST', 
				headers: {'Content-Type': 'application/json; charset=utf-8'},
				body: JSON.stringify({
				id:item.id
				})})
			.then(res=>res.json())
			.then(res=>{
			console.log(res)
				
			})
	}

	render () {
		const item = this.props.item;
		
		return (
			<li key={item.id} style={{width:'100%',borderBottom:'2px solid #fff'}}>
				<span
					onClick={()=>this.handleFinished(item)} 
					id={item.id}
					className="check-btn"
					style={this.state.style}
				></span>
				<span style={{display:'inline-block',float:'left',width:'90%',fontSize:15}}>
					{item.gName}
				</span>
				<span style={{display:'inline-block',marginLeft:'50%',fontSize:15}}>
					{item.gPrice2}
				</span>
				<span style={{display:'inline-block',marginLeft:'10%',fontSize:15}}>
					{item.gNum}
				</span>
				{/* <p onClick={()=>this.handleDelete(item)}>??</p> */}
			</li>
			
		);
	}
}

export default ListItem;