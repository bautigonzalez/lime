  import React from 'react';
  import { Link } from 'react-router-dom';
  import { Form, Button } from "react-bootstrap"
  import "./login.css"
  
  export default ({
    passwordChange,
    usernameChange,
    handleSubmit,
    username,
    password,
    tipo,
  }) => (
    <div className="fondo">
      <div className="container peliculas" id="peliculas">
        <div className="row" style={{ marginTop: "90px" }}>
          <div className="col-6 centrado" >
            <h4
              id="login"
              className="loginh4 mayuscula"
              style={{ fontWeight: "lighter" }}
            >
              Iniciar sesión
            </h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "lighter" }}>Email</Form.Label>
                <Form.Control
                  onChange={usernameChange}
                  name="username"
                  type="email"
                  placeholder="Ingrese su Email"
                  value={username}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{ fontWeight: "lighter" }}>
                  Contraseña
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  onChange={passwordChange}
                  name="password"
                  value={password}
                  required
                />
              </Form.Group>
              <Button
                id="boton"
                type="submit"
                className="font-weight-bold"
                style={{
                  backgroundColor: "#A6CD3B",
                  border: "1px solid #A6CD3B",
                  marginBottom: "20px",
                  width: "150px",
                  marginTop: "55px",
                }}
              >
                Ingresar
              </Button>
              <br></br>
              <a href="/api/user/auth/facebook">Login with Facebook</a>
            </Form>
          </div>
          <div className="col-6 beneficios">
            <h4
              id="login"
              className="loginh4 mayuscula"
              style={{ fontWeight: "lighter" }}
            >
              CREAR UNA CUENTA
            </h4>
            <p className="bajar" id="minuscula">
              Crear una cuenta es fácil. Introduce tu dirección de correo
              electrónico, diligencia el formulario de la página siguiente y
              disfruta de los beneficios de tener una cuenta.
            </p>
            <ul>
              <li>
                Una sola cuenta global con la que podrás acceder a
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;todos los productos y servicios de
                adidas.
              </li>
              <li>Finalizar tus pedidos más rápido</li>
              <li>Consultar tu historial de pedidos</li>
            </ul>
            {tipo == "Registrarse" ? (
              <></>
            ) : (
              <>
                <Link to="/user/register">
                  <Button
                    id="boton"
                    className="font-weight-bold"
                    style={{
                      backgroundColor: "#A6CD3B",
                      border: "1px solid #A6CD3B",
                      width: "150px",
                      marginLeft: "150px",
                    }}
                  >
                    Registrarse
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );