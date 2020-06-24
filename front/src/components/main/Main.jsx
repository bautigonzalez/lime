import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ProductsContainer from '../products/ProductsContainer';
import ProductContainer from '../product/ProductContainer'
import Navbar from "../common/navbar/Navbar"
import RegisterContainer from '../register/RegisterContainer';
import LoginContainer from '../login/LoginContainer';

export default () => (
  <div id="main">
    <Navbar/>
    <Switch>
      <Route exact path="/" component={ProductsContainer}/>
      <Route path="/product/:id" component={ProductContainer} />
      <Route path="/user/register" component={RegisterContainer}/>
      <Route path="/user/login" component={LoginContainer}/>
    </Switch>
  </div>
);