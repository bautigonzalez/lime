import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Card, Button } from "react-bootstrap";

export default ({ product }) => (
  <div className="container">
<div style={{ display: "flex", padding: "3rem" }}>
    <div>
      <Carousel style={{ width: "850px", height: "600px", display: "flex" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={product.image}
            style={{ maxWidth: "auto", maxHeight: "600px", display: "flex" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={product.secondaryimage}
            style={{ maxWidth: "auto", maxHeight: "600px", display: "flex" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
    <div>
      <Card border="light" style={{ width: "450px", height: "600px", display: "flex" }}>
        <Card.Body>
          <Card.Title style={{ fontSize:"45px" }}>{product.name}</Card.Title>
                    <Card.Title>{product.price} ARS</Card.Title>
          <Card.Text>
              {product.description}
              <br/>
              <br/>
              <br/>
                        <Button variant="primary">Add to cart</Button>

          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>


  </div>
);
