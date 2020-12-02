import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from './container/home'
import Inventory from './container/inventory'


class App extends Component{
  render(){
    return(
      <Router>
      <p>导航栏</p>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/Detail">库存页</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Detail">
          <Inventory />
        </Route>
      </Switch>
      </Router>
    )
  }
}

export default App;
