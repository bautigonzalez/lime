import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Card, Button } from "react-bootstrap";
import "./style.css"


export default ({ product, addToCart, userId }) => (
  <div className="fondo" style={{ marginLeft: '200px', paddingTop: "70px", fontWeight: "lighter"}}>
    {console.log(product)}
    <div style={{ display: "flex", padding: "3rem", paddingTop: "70px"}}>
    <div>
      <Carousel style={{ width: "500px", height: "400px" }}>
          <Carousel.Item style={{margin:"0 auto", padding:'10px', width:'100%'}}>
          <img
            className="d-block w-100"
            src={product.image}
              style={{ maxWidth: "250px", maxHeight: "300px", margin: "auto"}}
          />
        </Carousel.Item>
          <Carousel.Item style={{ margin: "0 auto", padding: '10px', width: '100%'}}>
          <img
            className="d-block w-100"
            src={product.secondaryimage}
              style={{ maxWidth: "250px", maxHeight: "300px", margin: "auto"}}
          />
        </Carousel.Item>
      </Carousel>
    </div>
    <div>
      <Card border="light" style={{ width: "450px", height: "400px", display: "flex" }}>
        <Card.Body>
          <Card.Title style={{ fontSize:"45px" }}>{product.name}</Card.Title>
                    <Card.Title>{product.price} ARS</Card.Title>
          <Card.Text>
              {product.description}
              <br />
              <br />
              <br />
              <strong>Valoracion: {product.valoration} ⭐</strong>
              <br/>
              <br/>
              <br/>
              <Button onClick={() => { addToCart(product, userId) }} variant="primary" style={{ marginLeft: '115px', backgroundColor: "#A6CD3B", border: "1px solid #A6CD3B" }} id="agregarAlCarrito">Agregar al carrito</Button>

          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>


  </div>
);
