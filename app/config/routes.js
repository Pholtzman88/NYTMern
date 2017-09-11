import React from "react";
import router, {
  Route,
  Router,
  hashHistory,
  IndexRoute
} from "react-router";

//bring in all components
import Main from "../components/Main";
import Search from "../components/views/Search";
import Saved from "../components/views/Saved";

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    	<Route path="/Search" component={Search}/>
      <Route path="/Saved" component={Saved}/>
      	<IndexRoute component={Search}/>
    </Route>
  </Router>
);