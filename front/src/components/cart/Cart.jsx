import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default ({ orders }) => (
  <div className="fondo">
    <h3>Este carrito es el numero</h3>
    {console.log(orders.products)}
  </div>
);