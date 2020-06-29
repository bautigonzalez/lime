import React from 'react';
import "./style.css";


export default ({ orders, total, username }) => (
  <div class="container">
   
<div class="card" style={{marginTop:"50px" ,marginBottom:"20px"}}>
<div class="card-body">

<p className="division">carrito de {username ? username.split("@").shift() : "Invitado"}:</p>
 <div class="table-responsive">

   <table class="table product-table">

     <thead class="mdb-color lighten-5">
       <tr>
         <th></th>
         <th class="font-weight-bold">
           <strong className="izq">Producto</strong>
         </th>
         <th class="font-weight-bold" style={{paddingRight:"34px"}}>
           <strong>Valoracion</strong>
         </th>
         <th></th>
         <th class="font-weight-bold" style={{paddingRight:"84px"}}>
           <strong>Precio</strong>
         </th>
         <th class="font-weight-bold"style={{paddingRight:"70px"}}>
           <strong>Cantidad</strong>
         </th>
         <th class="font-weight-bold" style={{paddingRight:"45px"}}>
           <strong>Total</strong>
         </th>
         <th style={{paddingRight:"45px"}}></th>
       </tr>
     </thead>
    
     <tbody>
        { orders.products ? (<>{orders.products.map((product) => (
                    <tr  id="the" style={{verticalAlign:"initial"}}>
                    <th scope="row" className="img" style={{verticalAlign:"middle"}}>
                      <img src={product.image} alt="" class="img-fluid z-depth-0"/>
                    </th>
                    <td className="tds">
                      <h5 class="mt-3 izq">
                        <strong>{product.name}</strong>
                      </h5>
                      <p class="text-muted izq">{product.category}</p>
                    </td>
                    <td className="tds" style={{verticalAlign:"initial", paddingLeft:"50px"}}>{product.valoration} </td>
                    <td className="tds"></td>
                    <td className="tds">${product.price}</td>
                    <td className="tds">
                      <input type="number" value="2" aria-label="Search" class="form-control"  style={{width: "100px"}}/>
                    </td>
                    <td className="tds">
                      <strong>{product.price}</strong>
                    </td>
                    <td className="tds">
                      <button type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
                        title="Remove item">X
                      </button>
                    </td>
                  </tr>   
                ))}</>) : (<><tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
              </tr></>)}

     </tbody>
   </table>
 </div>

{orders.products ? 

 <table class="table product-table">
<tbody>
 <tr className="precioFinal">
 <td colspan="3"></td>
 <td>
   <h4 >
     <strong>Total:</strong>
   </h4>
 </td>
 <td className="total">
   <h4 >
     <strong>{total(orders.products)} ARS</strong>
   </h4>
 </td>
 <td colspan="3" class="text-right">
   <button type="button" class="btn btn-primary btn-rounded">Completar Compra</button>
 </td>
</tr>
</tbody>
</table>
 

 : 
 
 
 <h1 className="total">Total 0 ARS</h1>}

</div>
</div>
</div>
 
);








/* 

<div>
    {console.log("me estoy renderizando", orders)}
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
            orders.products ? (<>{orders.products.map((product) => (
              <tr>
                <td>{product.name}</td>
                <td>{product.valoration}</td>
                <td>{product.price}</td>
              </tr>
            ))}</>) : (<><tr>
              <td>NA</td>
              <td>NA</td>
              <td>NA</td>
            </tr></>)
}
      </tbody>
    </Table>
  </div>
    {orders.products ? <h1 className="total">Total {total(orders.products)} ARS</h1> : <h1 className="total">Total 0 ARS</h1>}
  </div> */