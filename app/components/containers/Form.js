import React, { Component } from "react";
//export to router
export default class Form extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			searchTerm: "",
			startYear: "",
			endYear: ""
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleClick(){
		this.props.setSearch(
			this.state.searchTerm,
			this.state.startYear,
			this.state.endYear
		);
	}

	handleChange(e){
		let newState = {};
		newState[e.target.name] = e.target.value;
		this.setState(newState);
	}



	render(){
		return(
			<div className='panel panel-primary'>

				<div className='panel-heading'>
					<h3 className='panel-title text-left'>Search</h3>
				</div>

				<div className='panel-body text-left'>
					<form>

						<div className='form-group'>

							<h4 className=''><strong>Topic</strong></h4>
							<input type='text' className='form-control text-left' name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} required/>

							<h4><strong>Start Year</strong></h4>
							<input type='text' className='form-control text-left' name="startYear" value={this.state.startYear} onChange={this.handleChange} required/>
							
							<h4><strong>End Year</strong></h4>
							<input type='text' className='form-control text-left' name='endYear' value={this.state.endYear} onChange={this.handleChange} required/>

							<br/>
							<button type='button' className='btn btn-primary' onClick={this.handleClick}>Search</button>						
						</div>
					</form>
				</div>
			</div>
		);
	}
}