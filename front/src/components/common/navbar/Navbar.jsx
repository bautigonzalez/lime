import React from "react"
import {Navbar, Form, Button, Nav, Link, FormControl} from "react-bootstrap"

export default () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Features</Nav.Link>
          <Nav.Link>Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}
