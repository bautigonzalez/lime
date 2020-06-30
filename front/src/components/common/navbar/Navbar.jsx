import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Button, NavDropdown } from "react-bootstrap";
import "./navbar.css";

export default ({
  userId,
  username,
  deslogueandome,
  handlerChange,
  handlerSubmit,
  value,
  handleClick
}) => {
  return (
    <header className="header">
      <div className="container" style={{maxWidth:"1240px"}}>
        <nav className="row nav-principal" style={{display:'flex', justifyContent:"space-around"}}>
          <Link to="/" >
            <img
              className="icon"
              src="https://cdn2.iconfinder.com/data/icons/fruit-and-vegetables-3/200/276-512.png"
            />
          </Link>
          {userId ? (
            <>
              < >
                <Link className="navv" to={`/user/${userId}/profile`} style={{ marginLeft: "0.1px" }}> Hola {username.split("@").shift()}</Link>
                
              </>
            </>
          ) : (
            <>
              <Link className="navv" to="/user/login">Iniciar sesión</Link>
            </>
            
          )}
            
          <form
          
            className="buscador"
            onSubmit={handlerSubmit}
            id="search"
          >
            
            <input
              onChange={handlerChange}
              value={value}
              type="text"
              name="search"
              aria-describedby="button-addon1"
              placeholder="Buscar"
              className="form-control border-0 bg-light"
            />
            <button
              id="botonSearch"
              type="submit"
              className="btn btn-outline-light"
              id="buscador"
            >
              <i className="fa fa-search"></i>
            </button>
            
          </form>
          
         






          <div className='drop'>
        <a class="nav-link dropdown-toggle"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
          Categorias
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="menudrop"  onClick={() => handleClick("celulares")}>Celulares</a>
          <a class="menudrop"  onClick={() => handleClick("notebooks")}>Notebooks</a>
          <a class="menudrop"  onClick={() => handleClick("accesorios")}>Accesorios</a>
          <div class="dropdown-divider"></div>
          <a class="menudrop"  onClick={() => handleClick("")} >Todos</a>
        </div>
      </div>

      
         
        {userId ? (
            <>
              <div style={{display:'flex'}}>
                <Link className="navv2" to={`/user/${userId}/cart`}>
                  <i className="fas fa-shopping-cart"></i>&nbsp;Carrito
                </Link>
                <Link to="#" className="navv2" onClick={deslogueandome}>
                  Cerrar sesión
                </Link>
              </div>
            </>
          ) : (
            <Link className="navv2" to={`/user/invitado/cart`}>
            <i className="fas fa-shopping-cart"></i>&nbsp;Carrito
          </Link>
            
          )}
 
        </nav>





      </div>
    </header>
  );
};
