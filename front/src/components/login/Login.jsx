  import React from 'react';
  import { Link } from 'react-router-dom';
  import { Form, Button } from "react-bootstrap"
  import "./login.css"
  
  export default ({ passwordChange, usernameChange, handleSubmit, username, password, tipo }) => (
      <div className="fondo">
          <div className="container peliculas">
              <div className="row">
                  <div className="col-6 centrado">
                      <h4 id="login" className="loginh4">Iniciar sesión</h4>
                      <Form onSubmit={handleSubmit}>
                          <Form.Group controlId="formBasicEmail">
                              <Form.Label>Email</Form.Label>
                              <Form.Control 
                              onChange={usernameChange} 
                              name="username" 
                              type="email" 
                              placeholder="Ingrese su Email"
                              value={username}
                              />
                          </Form.Group>
                          <Form.Group controlId="formBasicPassword">
                              <Form.Label>Contraseña</Form.Label>
                              <Form.Control 
                              type="password" 
                              placeholder="Contraseña"
                              onChange={passwordChange}
                              name="password" 
                              value={password}
                              />
                          </Form.Group>
                          <Button className="submitButton" type="submit">
                              Ingresar
                          </Button>
                      </Form>
                  </div>
                  <div className="col-6 beneficios">
                      <h4 className="loginh4">CREAR UNA CUENTA</h4>     
                      <p>Crear una cuenta es fácil. Introduce tu dirección de correo electrónico, diligencia el formulario de la página siguiente y disfruta de los beneficios de tener una cuenta.</p>
                      {tipo=="Registrarse" ? (<></>):(<>
                      <Link to="/user/register"><Button className="submitButton">Registrarse</Button></Link>
                      </>)}
                  </div>
              </div>
          </div>
      </div>
  );