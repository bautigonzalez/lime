import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Button } from "react-bootstrap";
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
      <div className="container">
        <nav className="row nav-principal">
          <Link to="/">
            <img
              className="icon"
              src="https://cdn2.iconfinder.com/data/icons/fruit-and-vegetables-3/200/276-512.png"
            />
          </Link>
          {userId ? (
            <>
              <div className="costado">
                <p> Hola {username.split("@").shift()} </p>
                <Link className="cart" to={`/user/${userId}/cart`}>
                  <i className="fas fa-shopping-cart"></i>&nbsp;Carrito
                </Link>
                <Link className="cart" onClick={deslogueandome}>
                  Cerrar sesión
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link to="/user/login">Iniciar sesión</Link>
            </>
            
          )}

          <form
            className="row nav-principal"
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
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
          
          <Button onClick={() => handleClick("celulares")}>Celulares</Button>
          <Button onClick={() => handleClick("notebooks")}>Notebooks</Button>
          <Button onClick={() => handleClick("accesorios")}>Accesorios</Button>

        </nav>
      </div>
    </header>
  );
};
