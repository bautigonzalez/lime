import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ProductsContainer from '../products/ProductsContainer';
import ProductContainer from '../product/ProductContainer'
import NavbarContainer from "../common/navbar/NavbarContainer"
import RegisterContainer from '../register/RegisterContainer';
import LoginContainer from '../login/LoginContainer';
import CartContainer from '../cart/CartContainer';
import Presentacion from '../common/presentation/Presentacion' ;
import Footer from "../common/footer/Footer"


export default () => (
  <div id="main">
    <NavbarContainer/>
    <Switch>
      <Route exact path="/home" component={Presentacion}/>
      <Route exact path="/products" component={ProductsContainer}/>
      <Route path="/product/:id" component={ProductContainer} />
      <Route path="/user/register" component={RegisterContainer}/>
      <Route path="/user/login" component={LoginContainer}/>
      <Route path="/user/:id/cart" component={CartContainer}/>
      <Redirect from="/" to="/home" />
    </Switch>
    <Footer/>
  </div>
);