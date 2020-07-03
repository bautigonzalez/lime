import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Card, Button } from "react-bootstrap";
import "./users.css";


export default ({ carts, userId, user }) => {
    console.log(user)
    return (
        <div className="container" style={{marginTop:"50px", maxWidth:"70%"}}>
            <h3 className="proddd" style={{textAlign:"center", marginTop:"70px"}}>PERFIL DE USUARIO DE {user.username ? user.name.toUpperCase() : ""}</h3>
            <Card>
                <Card.Body>
                    <Card.Text className="tds">- Mail: {user.username} </Card.Text>
                    <Card.Text className="tds">- Direccion de entrega: {user.address} </Card.Text>
                    <Card.Text className="tds">- Compras realizadas: {carts.length} </Card.Text>
                </Card.Body>
            </Card>
            {carts.length ? (carts && carts.map(cart => (<>
                <Accordion defaultActiveKey="0" className="mdb-color lighten-5">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} eventKey="0" id="boton" className="font-weight-bold" style={{ backgroundColor: "#A6CD3B", border: "1px solid #A6CD3B" }}>
                                Compra del {cart.updatedAt.slice(5, 10)}
      </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
            <Card.Body>{cart.products.map (product => 
            <div style={{display: "flex"}}>
                    
                   <div className="imagen"><img style={{width:"50px" , height:"80px"}} src={product.image}/></div>
                    <div style={{margin:"17px", marginLeft:"-17px"}}>

                 
                   <ul className="tds">

                   <li className="nada"><div className="separacion">
                    <strong>{product.name}</strong>: {product.price} ARS
                        </div>
                    <Card.Link  style={{fontSize:"12px", marginLeft:"360"}}><Link style={{marginLeft:"360"}} to={`/product/${product.id}/review`}>Agregar review </Link></Card.Link>
                    <Card.Link  style={{fontSize:"12px"}}><Link to={`/product/${product.id}`}>Volver a comprar </Link></Card.Link>
                    </li>
                </ul>
                </div>
            </div>
                )}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
        </>))) : (<></>) }

        </div>
    )
}

