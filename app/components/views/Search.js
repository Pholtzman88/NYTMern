import React, { Component } from "react";
import router, { Link } from "react-router";
import Form from "../containers/Form";
import Results from "../containers/Results";
import helpers from "../utils/helpers";
//export to router
export default class Search extends Component{
	constructor(props){
		super(props)
		this.state = {
			searchTerm: "",
			startYear: "",
			endYear: "",
			searchResults: [],
		};
		this.setSearch = this.setSearch.bind(this);
	}

	setSearch(text,startYear,endYear){
		this.setState({
			searchTerm: text,
			startYear: startYear,
			endYear: endYear
		})
	}

	componentDidUpdate(){
		helpers.runQuery(
			this.state.searchTerm,
			this.state.startYear,
			this.state.endYear
		)
		.then(data => this.setState({searchResults: data}));
		console.log(this.state.searchResults);
	}
	
	render(){
		return(

				<div className="container col-sm-10">
				<Form setSearch={this.setSearch}/>
				<Results searchResults={this.state.searchResults}/>
				</div>

		);
	}
}