import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import "./style.css";


export default ({ orders, total, username }) => (
  <div>
    <p className="division">carrito de {username.split("@").shift()}:</p>
  <div>
    <Table striped bordered hover className="tabla">
      <thead>
        <tr>
          <th>Product</th>
          <th>Valoration</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
{
orders.products && orders.products.map((product) => (
  <tr>
<td>{product.name}</td>
<td>{product.valoration}</td>
<td>{product.price}</td>
  </tr>
))}
      </tbody>
    </Table>
  </div>
    {orders.products ? <h1 className="total">Total {total(orders.products)} ARS</h1> : 0}
  </div>
);