import React from 'react';
import { Link } from 'react-router-dom';

export default ({ products}) => (
  <div className="fondo">
      <div className="container products">
          <div className="container-fluid contenido">
            <h3>Productos</h3>
            <ul>{!products && "No hay productos para mostrar"}
                {products && products.map(product=>(<>
                  <Link key={product.id} to={`/product/${product.id}`}><li>{product.name}</li></Link>
                </>))}
            </ul>
          </div>
      </div>
  </div>
)