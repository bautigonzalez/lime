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
                      {tipo=="Registrarse" ? (<></>):(<>
                          <p className="centrado">O</p>
                      <Link to="/register"><Button className="submitButton">Registrarse</Button></Link>
                      </>)}
                  </div>
                  <div className="col-6 beneficios">
                      <h4 className="loginh4">Beneficios de tu cuenta OMDb gratuita</h4>     
                      <p><strong>Recomendaciones personalizadas</strong></p>
                      <p>Descubriras peliculas que amarás</p>
                      <p><strong>Tu lista de favoritos</strong></p>
                      <p>Podras guardas las peliculas que más te gusten</p>
                  </div>
              </div>
          </div>
      </div>
  );