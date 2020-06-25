import React from "react"
import { Link } from "react-router-dom"
//import {Navbar, Form, Button, Nav, FormControl} from "react-bootstrap"
import "./navbar.css";


export default ( {userId, username, deslogueandome, handlerChange, handlerSubmit}) => {
  return (
    <header className="header">
    <div className="container">
    <nav className="row nav-principal"> 
    
    <Link to="/" ><img className='icon' src="https://cdn2.iconfinder.com/data/icons/fruit-and-vegetables-3/200/276-512.png" /></Link>
    {userId ? (<>
          <p > Hola {username}   </p>
          <Link className='cart' to={`/user/${userId}/cart`}><i className="fas fa-shopping-cart"></i>&nbsp;Carrito</Link>
          <Link className='cart' onClick={deslogueandome}>Cerrar sesión</Link>
          </>):(<>
            <Link to="/user/login">Iniciar sesión</Link>
          </>)}
          
          <form className="row nav-principal" onSubmit={handlerSubmit} id='serch'>
          
          <input type="text" name="search" onChange={handlerChange} aria-describedby="button-addon1" placeholder="Search" className="form-control border-0 bg-light" id="search"/>

          <button id="search" type="button" className="btn btn-outline-light"><i className="fa fa-search"></i></button>
          </form>
    </nav>
  </div>
    
</header>
 );
}


{/* <div>
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
    </div>  */}