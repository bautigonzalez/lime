import React from 'react';
import "./style.css";
import { Modal, Button, Form, Alert } from "react-bootstrap";

export default ({
  orders,
  total,
  username,
  handleChange,
  disabledButton,
  handleClick,
  handleComplete,
  openModal,
  closeModal,
  showModal,
  cartInvitado,
  handleChangeModal,
  disabled,
  alerta,
  user
}) => (
  <div className="container">
    <div className="card" style={{ marginTop: "50px", marginBottom: "20px" }}>
      <div className="card-body">

          <h3 className="proddd" style={{alignContent:"center"}} >CARRITO {user.name ? `DE ${user.name.toUpperCase()}` : "INVITADO"}</h3>

        <div class="table-responsive">
          <table className="table product-table">
            <thead className="mdb-color lighten-5">
              <tr>
                <th></th>
                <th className="font-weight-bold">
                  <strong className="izq">Producto</strong>
                </th>
                <th
                  className="font-weight-bold"
                  style={{ paddingRight: "34px" }}
                >
                  <strong>Valoracion</strong>
                </th>
                <th></th>
                <th
                  className="font-weight-bold"
                  style={{ paddingRight: "84px" }}
                >
                  <strong>Precio</strong>
                </th>
                <th
                  className="font-weight-bold"
                  style={{ paddingRight: "70px" }}
                >
                  <strong>Cantidad</strong>
                </th>
                <th
                  className="font-weight-bold"
                  style={{ paddingRight: "45px" }}
                >
                  <strong>Total</strong>
                </th>
                <th style={{ paddingRight: "45px" }}></th>
              </tr>
            </thead>

            <tbody>
              {username ? (
                orders.products ? (
                  <>
                    {orders.products.map((product) => (
                      <tr
                        key={product.id}
                        id="the"
                        className={`c${product.id}`}
                        style={{ verticalAlign: "initial" }}
                      >
                        <th
                          scope="row"
                          className="img"
                          style={{ verticalAlign: "middle" }}
                        >
                          <img
                            src={product.image}
                            alt=""
                            className="img-fluid z-depth-0"
                          />
                        </th>
                        <td className="tds">
                          <h5 className="mt-3 izq">
                            <strong>{product.name}</strong>
                          </h5>
                          <p className="text-muted izq">{product.category}</p>
                        </td>
                        <td
                          className="tds"
                          style={{
                            verticalAlign: "initial",
                            paddingLeft: "50px",
                          }}
                        >
                          {product.valoration}{" "}
                        </td>
                        <td className="tds"></td>
                        <td className="tds">${product.price}</td>
                        <td className="tds">
                          <input
                            id={product.id}
                            placeholder={product.order.cant}
                            min="1"
                            max="10"
                            onChange={(e) =>
                              handleChange(product.id, product.price, e)
                            }
                            type="number"
                            aria-label="Search"
                            className="form-control"
                            style={{ width: "100px" }}
                          />
                        </td>
                        <td className="tds">
                          <strong
                            className={"subtotal"}
                            id={`total${product.id}`}
                          >
                            {product.price * product.order.cant}
                          </strong>
                        </td>
                        <td className="tds">
                          <Button
                            type="button"
                            variant="light"
                            data-toggle="tooltip"
                            data-placement="top"
                            onClick={() => handleClick(product.id)}
                            title="Remove item"

                          >
                            X
                        </Button>
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </>
                )
              ) : cartInvitado ? (
                <>
                  {cartInvitado.map((product) => (
                    <tr
                      key={product.id}
                      id="the"
                      className={`c${product.id}`}
                      style={{ verticalAlign: "initial" }}
                    >
                      <th
                        scope="row"
                        className="img"
                        style={{ verticalAlign: "middle" }}
                      >
                        <img
                          src={product.image}
                          alt=""
                          className="img-fluid z-depth-0"
                        />
                      </th>
                      <td className="tds">
                        <h5 className="mt-3 izq">
                          <strong>{product.name}</strong>
                        </h5>
                        <p className="text-muted izq">{product.category}</p>
                      </td>
                      <td
                        className="tds"
                        style={{
                          verticalAlign: "initial",
                          paddingLeft: "50px",
                        }}
                      >
                        {product.valoration}{" "}
                      </td>
                      <td className="tds"></td>
                      <td className="tds">${product.price}</td>
                      <td className="tds">
                        <input
                          id={product.id}
                          placeholder="1"
                          min="1"
                          max="10"
                          onChange={(e) =>
                            handleChange(product.id, product.price, e)
                          }
                          type="number"
                          aria-label="Search"
                          className="form-control"
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td className="tds">
                        <strong
                          className={"subtotal"}
                          id={`total${product.id}`}
                        >
                          {product.price}
                        </strong>
                      </td>
                      <td className="tds">
                        <Button
                          type="button"
                          variant="light"                          
                          data-toggle="tooltip"
                          data-placement="top"
                          onClick={() => handleClick(product.id)}
                          title="Remove item"
        
                        >
                          X
                        </Button>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>

        {orders.products ? (
          <table className="table product-table">
            <tbody>
              <tr className="precioFinal">
                <td colspan="3"></td>
                <td>
                  <h4>
                    <strong>Total:</strong>
                  </h4>
                </td>
                <td className="total">
                  <h4>
                    <strong id="totalfinal">
                      {total(orders.products)} ARS
                    </strong>
                  </h4>
                </td>
                <td colspan="3" className="text-right">
                    <Button
                      type="button"
                      variant="light"
                      data-toggle="tooltip"
                      data-placement="top"
                      onClick={() => openModal()}

                    >
                      
                  
                    Finalizar Compra
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <h4>
            <strong>Total: </strong>
            <strong id="totalfinal">0 ARS</strong>
          </h4>
        )}
      </div>
    </div>
    <Modal show={showModal} onHide={closeModal}>
      <Form onSubmit={() => handleComplete()}>
        <Modal.Header>
            <Modal.Title className="proddd" >Antes de finalizar...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Confirmar direccion</Form.Label>
            <Form.Control
              name="direccion"
              type="text"
              style={{ width: "100%" }}
              placeholder= {user.address}
              onChange={handleChangeModal}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Codigo postal</Form.Label>
            <Form.Control
              name="codigo"
              type="text"
              style={{ width: "100%" }}
              placeholder="CP"
              onChange={handleChangeModal}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Numero de tarjeta de credito</Form.Label>
            <Form.Control
              type="text"
              name="tarjeta"
              style={{ width: "100%" }}
              placeholder="Ingrese los 16 digitos del frente de su tarjeta"
              onChange={handleChangeModal}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>CCV</Form.Label>
            <Form.Control
              type="password"
              name="ccv"
              placeholder="Ingrese los 3 digitos del dorso de la tarjeta"
              onChange={handleChangeModal}
              required
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Body>
          <Button
            variant="light"
            style={{ margin: "10px 10px 10px 10px" }}
            onClick={() => handleComplete()}
            disabled={disabled}
          >
            Confirmar
          </Button>

          <Button
            variant="light"
            style={{ margin: "10px 10px 10px 10px" }}
            onClick={closeModal}
          >
            Cerrar
          </Button>
        </Modal.Body>

        {alerta ? (
          <Modal.Body style={{ alignContent: "center" }}>
            <Alert variant="success" style={{ alignContent: "center" }}>
              Compra realizada con éxito!
            </Alert>
          </Modal.Body>
        ) : null}
      </Form>
    </Modal>
  </div>
);