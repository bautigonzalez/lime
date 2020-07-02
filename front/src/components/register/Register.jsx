import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Alert } from "react-bootstrap"

export default ({
  passwordChange,
  passChange,
  usernameChange,
  nameChange,
  addressChange,
  handleSubmit,
  username,
  password,
  pass,
  name,
  address,
  alert,
  tipo,
}) => (
  <div
    className="container"
    style={{ marginTop: "50px", maxWidth: "70%", marginBottom: "150px" }}
  >
    <h3 className="proddd" style={{ textAlign: "center", marginTop: "70px" }}>
      REGISTRARSE{" "}
    </h3>
    <Form
      onSubmit={handleSubmit}
      className="proddd"
      style={{ marginTop: "50px", width: "100%", fontSize: "25px" }}
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={usernameChange}
          name="username"
          type="email"
          placeholder="Ingrese su Email"
          value={username}
          required
          style={{ width: "100%", fontSize: "18px", height: "40px" }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          onChange={nameChange}
          name="name"
          type="text"
          placeholder="Nombre"
          value={name}
          required
          style={{ width: "100%", fontSize: "18px", height: "40px" }}
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
          style={{ width: "100%", fontSize: "18px", height: "40px" }}
        />
      </Form.Group>
      {
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Verificar Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            onChange={passChange}
            name="password"
            value={pass}
            style={{ width: "100%", fontSize: "18px", height: "40px" }}
          />
          {alert ? (
            <Alert variant={"danger"}>Las contraseñas no coinciden</Alert>
          ) : null}
        </Form.Group>
      }
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Direccion</Form.Label>
        <Form.Control
          onChange={addressChange}
          name="address"
          type="text"
          placeholder="Direccion"
          value={address}
          required
          style={{ width: "100%", fontSize: "18px", height: "40px" }}
        />
      </Form.Group>
      <Button className="submitButton" type="submit">
        Registrarse
      </Button>
    </Form>
  </div>
);
