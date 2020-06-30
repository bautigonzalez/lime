import React from 'react';
import "./style.css";


export default ({ orders, total, username, handleChange, disabledButton, handleClick, handleComplete }) => (
  <div className="container">
   
<div className="card" style={{marginTop:"50px" ,marginBottom:"20px"}}>
<div className="card-body">

<p className="division">carrito de {username ? username.split("@").shift() : "Invitado"}:</p>
 <div class="table-responsive">

   <table className="table product-table">

     <thead className="mdb-color lighten-5">
       <tr>
         <th></th>
         <th className="font-weight-bold">
           <strong className="izq">Producto</strong>
         </th>
         <th className="font-weight-bold" style={{paddingRight:"34px"}}>
           <strong>Valoracion</strong>
         </th>
         <th></th>
         <th className="font-weight-bold" style={{paddingRight:"84px"}}>
           <strong>Precio</strong>
         </th>
         <th className="font-weight-bold"style={{paddingRight:"70px"}}>
           <strong>Cantidad</strong>
         </th>
         <th className="font-weight-bold" style={{paddingRight:"45px"}}>
           <strong>Total</strong>
         </th>
         <th style={{paddingRight:"45px"}}></th>
       </tr>
     </thead>
    
     <tbody>
        { orders.products ? (<>{orders.products.map((product) => (
                    <tr key={product.id} id="the" className={`c${product.id}`} style={{verticalAlign:"initial"}}>
                    <th scope="row" className="img" style={{verticalAlign:"middle"}}>
                      <img src={product.image} alt="" className="img-fluid z-depth-0"/>
                    </th>
                    <td className="tds">
                      <h5 className="mt-3 izq">
                        <strong>{product.name}</strong>
                      </h5>
                      <p className="text-muted izq">{product.category}</p>
                    </td>
                    <td className="tds" style={{verticalAlign:"initial", paddingLeft:"50px"}}>{product.valoration} </td>
                    <td className="tds"></td>
                    <td className="tds">${product.price}</td>
                    <td className="tds">
                      <input id={product.id} placeholder={product.order.cant} min="1" max="10" onChange={(e)=>handleChange(product.id, product.price, e)} type="number" aria-label="Search" className="form-control"  style={{width: "100px"}}/>
                    </td>
                    <td className="tds">
                      <strong className={"subtotal"} id={`total${product.id}`}>{product.price * product.order.cant}</strong>
                    </td>
                    <td className="tds">
              <button type="button" className="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top" onClick={() => handleClick(product.id)} 
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

 <table className="table product-table">
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
     <strong id="totalfinal">{total(orders.products)} ARS</strong>
   </h4>
 </td>
 <td colspan="3" className="text-right">
   <button type="button" className="btn btn-primary btn-rounded" onClick = {()=> handleComplete()}>Completar Compra</button>
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