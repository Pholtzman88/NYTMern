import React, { Component } from "react";

import helpers from "../utils/helpers";
//export to router
export default class Saved extends Component{
	constructor(props){
		super(props);
		this.state = {
			savedArticles: []
		}
	}

	componentDidMount(){
		helpers.getArticles().then(function(articles){
		this.setState({savedArticles: articles.data});
		console.log(articles.data);
		console.log(`savedArticles  :${savedArticles}`);
		}.bind(this))
	}

	render(){
		const results = this.state.savedArticles;
		const listResults = results.map(function(doc,i){
			return(
				<li className="list-group-item" key={i}>
					<h3>{doc.title}</h3>
					<br/>
					<p>{doc.snippet}</p>
					<a href={doc.web_url} target="_blank" className="badge badge-info">Learn More</a>
				</li>
			);
		});

		return(
			<div className="panel panel-primary">
				<div className="panel-heading">Saved Articles</div>
				<ul className="list-group list-group-flush">
				{listResults}
				</ul>
			</div>
		);
	}
}