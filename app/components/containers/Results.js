import React, { Component } from "react";
import helpers from "../utils/helpers";


//export to router
export default class Results extends Component {
	constructor(){
		super();
	}

	handleClick(article){
		helpers.saveArticle(article)
		.then(function(data){
			console.log(data)
		}.bind(this));
	}

	render(){
		//bring in search results prop from main
		const results = this.props.searchResults;
		//iterate through results array
		const listResults = results.map((doc, i) => {
			//asign key to index of item and assign h3 to headline str
			return(
				<li className="list-group-item" key={i}>
					<h3>{doc.headline.main}</h3>
					<br/>
					<p>{doc.snippet}</p>
					<a href={doc.web_url} target="_blank" className="badge badge-info float-left">Learn More</a>
					<button type="button" className="btn btn-success float-right" onClick={this.handleClick.bind(this,doc)}>Save</button>
				</li>
			);
		});
		return (
			<div className="panel panel-primary">
				<div className="panel-heading">Search Results</div>
				<ul className="list-group list-group-flush">
				{listResults}
				</ul>
			</div>
		)
	}
}