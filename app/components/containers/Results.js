import React, { Component } from "react";
import helpers from "../utils/helpers";

let saveArticle = doc => helpers.saveArticle(doc);

//export to router
export default class Results extends Component {

	render(){
		//bring in search results prop from main
		const results = this.props.searchResults;
		//iterate through results array
		const listResults = results.map(function(doc, i){
			let boundClick = saveArticle.bind(this, doc)
			//asign key to index of item and assign h3 to headline str
			return(
				<li className="list-group-item" key={i}>
					<h3>{doc.headline.main}</h3>
					<br/>
					<p>{doc.snippet}</p>
					<a href={doc.web_url} target="_blank" className="badge badge-info">Learn More</a>
					<button type="button" className="btn btn-success float-right" onClick={boundClick}>Save</button>
				</li>
			);
		});
		return (
			<div className="card">
				<div className="card-header">Search Results</div>
				<ul className="list-group list-group-flush">
				{listResults}
				</ul>
			</div>
		)
	}
}