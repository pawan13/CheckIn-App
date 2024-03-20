import React from "react";
import { Form } from "react-bootstrap";
import "../../App.css";

const CustomInput = ({ label, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} className="input-fields" />
    </Form.Group>
  );
};

export default CustomInput;
