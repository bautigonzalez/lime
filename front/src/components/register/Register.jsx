import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Alert } from "react-bootstrap"

export default ({ passwordChange, passChange, usernameChange,nameChange, addressChange, handleSubmit, username, password, pass, name, address, alert, tipo }) => (
    <div className="fondo">
        <div className="container peliculas">
            <div className="row">
                <div className="col-6 centrado">
                    <h4 id="login" className="loginh4">REGISTRARSE</h4>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            onChange={usernameChange} 
                            name="username" 
                            type="email" 
                            placeholder="Ingrese su Email"
                            value={username}
                            required
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                            onChange={nameChange} 
                            name="name" 
                            type="text" 
                            placeholder="Nombre"
                            value={name}
                            required
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
                        {<Form.Group controlId="formBasicPassword">
                            <Form.Label>Verificar Contraseña</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Contraseña"
                            onChange={passChange}
                            name="password" 
                            value={pass}
                            />
                            {alert ? (<Alert variant={"danger"}>
                            Las contraseñas no coinciden 
                             </Alert>   ):null }
                        
                            </Form.Group>}
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control 
                            onChange={addressChange} 
                            name="address" 
                            type="text" 
                            placeholder="Direccion"
                            value={address}
                            required
                            />
                        </Form.Group>
                        <Button className="submitButton" type="submit">
                            Registrarse
                        </Button>
                    </Form>
                </div>
                <div className="col-6 beneficios">
                      <h4 className="loginh4 centrado">CREAR UNA CUENTA</h4>     
                      <p className="bajar" id="minuscula">Crear una cuenta es fácil. Introduce tu dirección de correo electrónico, diligencia el formulario de la página siguiente y disfruta de los beneficios de tener una cuenta.</p>
                      <ul>
                          <li>
                          Una sola cuenta global con la que podrás acceder a todos los productos y servicios de adidas.
                          </li>
                          <li>
                          Finalizar tus pedidos más rápido

                          </li>
                          <li>
                          Consultar tu historial de pedidos

                          </li>
                      </ul>ok, le puse publicar. Me llevo 5min olvidarme mi propia idea. 
                      {tipo=="Registrarse" ? (<></>):(<>
                      <Link to="/user/register"><Button className="submitButton" id="registrase">Registrarse</Button></Link>
                      </>)}
                  </div>
            </div>
        </div>
    </div>
);
