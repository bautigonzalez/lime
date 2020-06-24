import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ProductsContainer from '../products/ProductsContainer';
import ProductContainer from '../product/ProductContainer'
import Navbar from "../common/navbar/Navbar"

export default () => (
  <div id="main">
    <Navbar/>
    <Switch>
      <Route exact path="/" component={ProductsContainer}/>
      <Route path="/product/:id" component={ProductContainer} />
    </Switch>
  </div>
);