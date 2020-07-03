import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Card, Button } from "react-bootstrap";
import Rating from '@material-ui/lab/Rating';
import "./style.css"


export default ({ product, addToCart, userId, reviews, state , handleClick, productId}) => (
  <div className="fondo" style={{ paddingTop: "70px", fontWeight: "lighter"}}>
    
    <div style={{ display: "flex", justifyContent:"center"}}>
      <div>
      <Carousel style={{ width: "550px", height: "400px" }}>
          <Carousel.Item style={{margin:"0 auto", padding:'10px', width:'100%'}}>
          <div className="pruba">
          <img
            className="d-block w-100"
            src={product.image}
            id="imgCentradas"
          />
          </div>
        </Carousel.Item>
          <Carousel.Item style={{margin:"0 auto", padding:'10px', width:'100%',display:"flex", alignItems:"center"}}>
         <div>
         <img
            className="d-block w-100"
            src={product.secondaryimage}
            id="imgCentradas"
          />
         </div>
        </Carousel.Item>
      </Carousel>
    </div>
    <div>
        <Card  style={{ width: "550px", height: "100%", display: "flex", borderColor:'#DCDCDC', borderRadius:'10px' }}>
        <Card.Body>
            <Card.Title style={{ fontSize:'40px' ,fontFamily: 'Gill Sans, sans-serif', fontWeight: 'lighter' }}>{product.name}</Card.Title>
          
          <Rating value={product.valoration} readOnly size="medium" />   
          <br/>
          <br/>
       
          <Card.Text>
              {product.description}
              <br/>
             
          </Card.Text>
            <Card.Title style={{ fontSize: '35px', fontFamily: 'Gill Sans, sans-serif', fontWeight: 'lighter' }}>{product.price} ARS</Card.Title>
         <br/>
          <br/>
          {}
          <Button onClick={userId ? () => addToCart(product, userId) : () =>  addToCart(product, "invitado")} variant="primary" style={{backgroundColor: "#A6CD3B", border: "1px solid #A6CD3B" }} id="agregarAlCarrito">Agregar al carrito</Button>
            {state > 0 ? <Button onClick={()=>handleClick(productId)} variant="primary" style={{ backgroundColor: "#A6CD3B", border: "1px solid #A6CD3B" }} id="agregarAlCarrito" >Eliminar producto</Button> : null}
        </Card.Body>
      </Card>

    </div>

  </div >

  
  {reviews.length ? (<div style={{width:'100%'}}>
      <h3 style={{ display: "flex", justifyContent: "center", marginTop: '60px', fontFamily:'Gill Sans, sans-serif', fontWeight: 'lighter' }}>Opiniones sobre {product.name}</h3>
      <hr className="solid" style={{ display: "flex", justifyContent: "center" }}/>
  </div>) : (null) }

    {reviews.length ? (<>
    {reviews && reviews.map((review)=> 
      <div className="reviewss" style={{ display: "flex", justifyContent: "center" }}>
<Card style={{ width: "1000px"}}>
        <Card.Header><Rating value={review.stars} readOnly size="medium" /></Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
        {review.content}{' '}
            </p>
            <footer className="blockquote-footer">
              Realizada por <cite title="Source Title">{review.user ? review.user.username : ""}</cite> el <cite title="Source Title">{review.createdAt.slice(5, 10)}</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
      
    )}
    </>) : (null)}
  </div>
);
