import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Accordion } from "react-bootstrap";

export default ({ users, setAdmin }) => (
  <div className="container" style={{ marginTop: "50px", maxWidth: "70%", marginBottom:"200px" }}>
    <h3 className="proddd" style={{ textAlign: "center", marginTop: "70px" }}>
      PERFIL DE ADMINISTRADOR
    </h3>
    <Card>
      <Card.Body>
        <Card.Text className="tds">
          - Cantidad de usuarios activos: {users.length}
        </Card.Text>
      </Card.Body>
    </Card >
    {!users && "No hay usuarios para mostrar"}
    {users.length ? (
      users &&
      users.map((user) => (
        <>
          <Card>
            <Card.Header style={{ float: "inherit" }}>
              <div
                style={{
                  fontWeight: "lighter",
                  fontSize: "19px",
                  fontFamily: "Gill Sans, sans-serif",
                }}
              >
                Mail: {user.username}
                <br></br>
                Nombre: {user.name}
                <br></br>
                Miembro desde: {user.createdAt.slice(5, 10)}
                {user.state != 2 ? (
                  user.state == 0 ? (
                    <Button
                      onClick={() => setAdmin(user.id, 1)}
                      id="boton"
                      className="font-weight-bold"
                      style={{
                        backgroundColor: "#A6CD3B",
                        border: "1px solid #A6CD3B",
                        float: "right",
                      }}
                    >
                      Hacer Admin
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setAdmin(user.id, 0)}
                      id="boton"
                      className="font-weight-bold"
                      style={{
                        backgroundColor: "#A6CD3B",
                        border: "1px solid #A6CD3B",
                        float: "right",
                      }}
                    >
                      Quitar Admin
                    </Button>
                  )
                ) : (
                  ""
                )}
              </div>
            </Card.Header>
          </Card>
        </>
      ))
    ) : (
      <></>
    )}
  </div>
);