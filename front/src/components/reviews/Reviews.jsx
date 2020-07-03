import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Card, Button, Form } from "react-bootstrap";
import Rating from '@material-ui/lab/Rating';
import "./reviews.css"


export default ({ product, reviews, contentChange, starsChange, handleSubmit, content, stars}) => (
    <div className="fondo" style={{ marginLeft: '200px', paddingTop: "70px", fontWeight: "lighter" }}>
        {console.log(reviews)}
        <div style={{ display: "flex", padding: "3rem", paddingTop: "70px" }}>
            <div>
                <Carousel style={{ width: "500px", height: "400px" }}>
                    <Carousel.Item style={{ margin: "0 auto", padding: '10px', width: '100%' }}>
                        <img
                            className="d-block w-100"
                            src={product.image}
                            style={{ maxWidth: "250px", maxHeight: "300px", margin: "auto" }}
                        />
                    </Carousel.Item>
                    <Carousel.Item style={{ margin: "0 auto", padding: '10px', width: '100%' }}>
                        <img
                            className="d-block w-100"
                            src={product.secondaryimage}
                            style={{ maxWidth: "250px", maxHeight: "300px", margin: "auto" }}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <Card style={{ width: "550px", height: "100%", display: "flex", borderColor: '#DCDCDC', borderRadius: '10px' }}>
                    <Card.Body>
                        <Card.Title style={{ fontSize: '40px', fontFamily: 'Gill Sans, sans-serif', fontWeight: 'lighter' }}>{product.name}</Card.Title>

                        <Rating value={product.valoration} readOnly size="medium" />
                        <br />
                        <br />

                        <Card.Text>
                            {product.description}
                            <br />

                        </Card.Text>
                        <Card.Title style={{ fontSize: '35px', fontFamily: 'Gill Sans, sans-serif', fontWeight: 'lighter' }}>{product.price} ARS</Card.Title>
                        <br />
                        <br />
                        {}
                    </Card.Body>
                </Card>

            </div>
        </div >
        <div className="reviews">
        <Form style={{ width: "1000px" }} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{ fontWeight: "lighter", fontSize: "20px", fontFamily: "Gill Sans, sans-serif", color:'#808080'}}>Tu review sobre el producto:</Form.Label>
                <Form.Control 
                    onChange={contentChange}
                    name="content"
                    value={content}
                    size="lg"
                    style={{ width: "1000px", height:'150px' }}
                    type="text" 
                     />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label style={{ fontWeight: "lighter", fontSize: "20px", fontFamily: "Gill Sans, sans-serif", color: '#808080'}}>Valoración:</Form.Label>
                <Form.Control as="select"
                    onChange={starsChange}
                    name="content"
                    value={stars}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
                <Button style={{
                    backgroundColor: "#A6CD3B",
                    border: "1px solid #A6CD3B"
                }} type="submit">
                Enviar
  </Button>
        </Form>
        </div>
    </div>
);