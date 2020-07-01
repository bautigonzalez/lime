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
  handleSubmit
  
}) => {
  return(
  <Form onSubmit={handleSubmit}>
    <h4>Publicar Producto</h4>
    <Form.Group>
      <Form.Label>Nombre del producto</Form.Label>
      <Form.Control
        onChange={nameChange}
        name="name"
        type="text"
        placeholder="name"
        value={name}
        required
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>description</Form.Label>
      <Form.Control
        onChange={descriptionChange}
        name="description"
        type="text"
        placeholder="description"
        value={description}
        required
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>category</Form.Label>
      <Form.Control
        onChange={categoryChange}
        name="category"
        type="text"
        placeholder="category"
        value={category}
        required
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>price</Form.Label>
      <Form.Control
        onChange={priceChange}
        name="name"
        type="text"
        placeholder="price"
        value={price}
        required
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>price</Form.Label>
      <Form.Control
        onChange={imageChange}
        name="name"
        type="text"
        placeholder="price"
        value={image}
        required
      />
    </Form.Group>
    <Button type="submit" >PUBLICAR</Button>
  </Form>
)};
