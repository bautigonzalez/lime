import React from 'react';
import { Link } from 'react-router-dom';

export default ({ product }) => (
    <div className="fondo">
        <h3>Producto {product.name}</h3>
    </div>
);