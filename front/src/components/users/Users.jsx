import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Card, Button } from "react-bootstrap";
import "./users.css";


export default ({ carts, userId, user }) => {
    console.log(user)
    return (
        <div className="container" style={{marginTop:"50px", maxWidth:"70%"}}>

            <Card>
                <Card.Header>PERFIL DE USUARIO DE {user ? user.username.split("@").shift().toUpperCase() : ""}
</Card.Header>
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
                <ul className="tds">
                    <li><strong>{product.name}</strong>: {product.price} ARS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    <Card.Link  style={{fontSize:"12px"}}><Link to={`/product/${product.id}/review`}>Agregar review </Link></Card.Link>
                    <Card.Link  style={{fontSize:"12px"}}><Link to={`/product/${product.id}`}>Volver a comprar </Link></Card.Link>
</li>
                </ul>)}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
        </>))) : (<></>) }

        </div>
    )
}

