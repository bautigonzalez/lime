import React from 'react';
import { Link } from 'react-router-dom';
import "./products.css";
import Rating from '@material-ui/lab/Rating';
import {MDBIcon} from "mdbreact"



export default ({ products, addToCart, userId}) => {
console.log("esto es products: ", products)
return (
  
 
  <div className="container" id='alto' >

{/* NAVAR DE FILTROS */}

  {/* NAVAR DE FILTROS */}
  

{/* TODOS LOS PRODUCTOS */}

<section className="text-center mb-4" >
  
<h3 className="proddd" >PRODUCTOS :</h3>
<hr className="solid"/>
<div className="row " style={{paddingLeft:'0px', paddingRight:'0px'}}>
  
  {!products && "No hay productos para mostrar"}
  {products && products.map(product => (
    <div className="col-lg-3 col-md-6 mb-4" key={product.id} id="card2">
      <div className="card" id="sombra" >
         <div className="view overlay" id="prod">
         <Link  to={`/product/${product.id}`}><img src={product.image} className="card-img-top" id="imgCentrada"/></Link>
       </div>
       <hr className="solid" style={{margin:"10px"}}/>
          <div className="card-body text-center" id="cart2" style={{height:"278px", marginTop:"-20px", marginLeft:"-20px"}}>
          <h6 style={{color:"grey", marginBottom:"20px"}}>{product.category}</h6>
         <h5>
           <strong>
              <Link to={`/product/${product.id}`}><p className="prodName">{product.name}</p></Link>
           </strong>
         </h5>
         
         <div className='valoration'>
         <Rating value={product.valoration} readOnly size="medium"/>
         </div>
         
         

         <hr className="solid"/>
         <div className='px-1'>
                <span className='float-left '>
                <h5 className="font-weight-bold blue-text">
                <p className="hola">${product.price}</p>
                  </h5>
                </span>
                <span className='float-right' style={{backgroundColor:'white', border:"none"}}>
              <MDBIcon icon="cart-plus" id="cart" onClick={ userId ? () => addToCart(product, userId) : () =>  addToCart(product, "invitado")}/>
                </span>
              </div>
       </div>
 
     </div>
     </div>
  
       ))}
       
</div>
</section>
  </div>
)
}

