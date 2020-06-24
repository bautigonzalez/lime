import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default ({ cart }) => (
  <div className="fondo">
    <h3>Este carrito es el numero {cart.id}</h3>
  </div>
);