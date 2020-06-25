import React from "react"
import { Link } from "react-router-dom"
//import {Navbar, Form, Button, Nav, FormControl} from "react-bootstrap"
import "./navbar.css";


export default ( {userId, username}) => {
  return (
    <header className="header">
    <div className="container">
    <nav className="row nav-principal"> 
    
    <Link to="/" ><img className='icon' src="https://cdn2.iconfinder.com/data/icons/fruit-and-vegetables-3/200/276-512.png" /></Link>
    {userId ? (<>
          <div className="costado">
          <p > Hola {username}   </p>
          </div>
          <Link className='cart' to={`/user/${userId}/cart`}><i className="fas fa-shopping-cart"></i>&nbsp;Cart</Link>
          
          </>):(<>
            <Link to="/user/login">Login</Link>
            <Link to="/user/register">Register</Link>
          </>)}
          
          <form className="row nav-principal" id='search'>
          <input type="text" name="search" aria-describedby="button-addon1" placeholder="Search" className="form-control border-0 bg-light" />
          <button id="botonSearch" type="button" className="btn btn-outline-light"><i className="fa fa-search"></i></button>
          </form>
    </nav>
  </div>
    
</header>
 );
}
