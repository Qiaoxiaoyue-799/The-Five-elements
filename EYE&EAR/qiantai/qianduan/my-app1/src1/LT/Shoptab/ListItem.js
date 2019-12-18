import React, { Component } from 'react';

class ListItem extends Component {
	constructor (props) {
		super(props);

		this.handleFinished = this.handleFinished.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	} 

	handleFinished () {
		var status = this.props.item.status;

		status = (status === 0 ? 1 : 0);

		var obj = {
			id: this.props.item.id,
			name: this.props.item.name,
			status: status
		}
		
		this.props.finishedChange(obj);	
	}

	handleDelete () {
		this.props.totalChange(this.props.item);
	}

	render () {
		const item = this.props.item;
		
		return (
			<li key={item.id}>
				<span 
					onClick={this.handleFinished} 
					id={item.id}
					className="check-btn"
					style={{backgroundColor: item.status === 0 ? '#fff' : 'gray',float:'left',marginTop:12}}
				></span>
				<span style={{display:'inline-block',float:'left',width:'90%',fontSize:15}}>
					{item.title}
				</span>
				<span style={{display:'inline-block',marginLeft:'50%',fontSize:15}}>
					{item.price}
				</span>
				<span style={{display:'inline-block',marginLeft:'10%',fontSize:15}}>
					{item.num}
				</span>
				
				<p onClick={this.handleDelete} className="delete-btn">删除</p>
			</li>
		);
	}
}

export default ListItem;