import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ProductsContainer from '../products/ProductsContainer';

export default () => (
  <div id="main">
    holaaaaaaaaaaaaaa
    <Switch>
      <Route path="/" component={ProductsContainer}/>
    </Switch>
  </div>
);