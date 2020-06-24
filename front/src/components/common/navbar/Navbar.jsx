import React from "react"
import { Link } from "react-router-dom"
import {Navbar, Form, Button, Nav, FormControl} from "react-bootstrap"

export default ( {userId, username}) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand><Link to="/">LIME</Link></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          {userId ? (<>
          <Nav.Link>Hola {username}</Nav.Link>
          <Nav.Link><Link to={`/user/${userId}/cart`}>Mi carrito</Link></Nav.Link>
          </>):(<>
            <Nav.Link><Link to="/user/login">Login</Link></Nav.Link>
            <Nav.Link><Link to="/user/register">Register</Link></Nav.Link>
          </>)}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}
