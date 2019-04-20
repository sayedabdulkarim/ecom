import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar/Navbar'
import ProductList from './components/ProductList/ProductList'
import Details from './components/Details/Details'
import Cart from './components/Cart/Cart'
import Model from './components/Model/Model'
import Default from './components/Default/Default'


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={ProductList}/> 
          <Route path='/details' exact component={Details}/> 
          <Route path='/cart' exact component={Cart}/> 
          <Route path='' component={Default}/> 
        </Switch>
        <Model />
      </Router>
    );
  }
}

export default App;
