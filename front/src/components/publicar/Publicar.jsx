import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

export default ({
  name,
  description,
  category,
  
  price,
  nameChange,
  descriptionChange,
  categoryChange,
  image,
  imageChange,
  priceChange,
  handleSubmit,
  imageSecChange,
  image2
  
}) => {
  return (
    <div
      className="container"
      style={{ marginTop: "50px", maxWidth: "70%", marginBottom: "150px" }}
    >
      <Form
        onSubmit={handleSubmit}
        className="proddd"
        style={{ marginTop: "50px", width: "100%", fontSize: "25px" }}
      >
        <h3
          className="proddd"
          style={{ textAlign: "center", marginTop: "70px" }}
        >
          PUBLICAR UN PRODUCTO{" "}
        </h3>{" "}
        <Form.Group>
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control
            onChange={nameChange}
            name="name"
            type="text"
            placeholder="Nombre"
            value={name}
            required
            style={{ width: "100%", fontSize: "18px" }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            onChange={descriptionChange}
            name="description"
            type="text"
            placeholder="Descripcion"
            value={description}
            required
            style={{ width: "100%", fontSize: "18px" }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            as="select"
            onChange={categoryChange}
            name="category"
            type="text"
            placeholder="Categoria"
            value={category}
            required
            style={{ width: "100%", fontSize: "18px" }}
          >
            <option value="Celulares">Celulares</option>
            <option value="Notebooks">Notebooks</option>
            <option value="Accesorios">Accesorios</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio</Form.Label>
          <Form.Control
            onChange={priceChange}
            name="name"
            type="text"
            placeholder="Precio en ARS"
            value={price}
            required
            style={{ width: "100%", fontSize: "18px" }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen principal</Form.Label>
          <Form.Control
            onChange={imageChange}
            name="name"
            type="text"
            placeholder="Imagen URL"
            value={image}
            required
            style={{ width: "100%", fontSize: "18px" }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen Secundaria</Form.Label>
          <Form.Control
            onChange={imageSecChange}
            name="name"
            type="text"
            placeholder="Imagen URL"
            value={image2}
            required
            style={{ width: "100%", fontSize: "18px" }}
          />
        </Form.Group>
        <Button
          type="submit"
          id="boton"
          className="font-weight-bold"
          style={{
            backgroundColor: "#A6CD3B",
            border: "1px solid #A6CD3B",
          }}
        >
          Publicar{" "}
        </Button>
      </Form>
    </div>
  );};
