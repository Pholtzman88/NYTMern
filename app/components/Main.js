import React, { Component } from "react";
import Router, { Link } from "react-router";

//export to router
export default class Main extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className="view-container">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
				    <ul className="navbar-nav">
				      <li className="nav-item">
				        	<Link to="/Search" className="nav-link" href="#">Search Articles</Link>
				      </li>
				      <li className="nav-item">
				        	<Link to="/Saved" className="nav-link" href="#">Saved Articles</Link>
				      </li>
				    </ul>
				</nav>
				<div className="jumbotron jumbotron-fluid">
				  <div className="container">
				    <h1 className="display-3">NY Times Article Scrubber</h1>
				    <p className="lead">Search for and annotate articles of interest!</p>
				  </div>
				</div>
				<div className="container col-sm-8">
					{this.props.children}
				</div>
			</div>
		);
	}
}