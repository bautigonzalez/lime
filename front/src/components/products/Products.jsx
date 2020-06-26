import React from 'react';
import { Link } from 'react-router-dom';
import "./products.css";


export default ({ products}) => {
console.log("esto es products: ", products)
return (
  
 
  <div className="container" id='alto' >

{/* NAVAR DE FILTROS */}

  {/* NAVAR DE FILTROS */}
  

{/* TODOS LOS PRODUCTOS */}

<section className="text-center mb-4" >
  
<h3 className="hola" >PRODUCTOS :</h3>
<hr className="solid"/>
<div className="row wow fadeIn"  >
  
  {!products && "No hay productos para mostrar"}
  {products && products.map(product => (
    <div className="col-lg-3 col-md-6 mb-4" key={product.id} id="card2">
      <div className="card" id="sombra" >
         <div className="view overlay" id="prod">
         <Link  to={`/product/${product.id}`}><img src={product.image} className="card-img-top" style={{maxHeight:"345px", maxWidth:"200px"}}/></Link>
       </div>
       <hr className="solid"/>
          <div className="card-body text-center" style={{height:"215px"}}>
         <h5>
           <strong>
             <p className="prodName">{product.name}</p>
           </strong>
         </h5>
         <p className=" text-uppercase">Categoria...</p>
 
         <h5 className="font-weight-bold blue-text">
           <p className="hola">${product.price}</p>
         </h5>
         <h6>
         <p className="val">⭐{product.valoration}</p>
         </h6>
 
       </div>
 
     </div>
     </div>
  
       ))}
       
{/* TODOS LOS PRODUCTOS */}


</div>


</section>




  </div>
)
}

