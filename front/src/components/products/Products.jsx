import React from 'react';
import { Link } from 'react-router-dom';
import "./products.css";


export default ({ products}) => {
console.log(products)
return (
  
 
  <div className="container" id='alto' >

{/* NAVAR DE FILTROS */}
<nav className="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5" style={{backgroundColor:"#333"}}>
<span className="navbar-brand">Categories:</span>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
  aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="basicExampleNav">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <a className="nav-link" href="#">All
        <span className="sr-only">(current)</span>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Smartphones</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Notebooks</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Accessories</a>
    </li>
  </ul>
  <form className="form-inline">
    <div className="md-form my-0">
      <input className="form-control mr-sm-2" type="text" placeholder="⌕" aria-label="Search"/>
     
    </div>
  </form>
</div>
</nav>
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


<nav class="d-flex justify-content-center wow fadeIn">
        <ul class="pagination pg-blue">

          <li class="page-item disabled">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>

          <li class="page-item active">
            <a class="page-link" href="#">1
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">5</a>
          </li>

          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>











  




  </div>
)
}

