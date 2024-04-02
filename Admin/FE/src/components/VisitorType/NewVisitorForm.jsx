import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addVisitorAction } from "../../Pages/VisitorType/VisitorAction";

export const NewVisitorForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addVisitorAction({ ...form }));
    e.target.reset();
  };

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <Form
        className=" border p-5 shadow-lg rounded mt-3 mb-3"
        onSubmit={handleOnSubmit}
      >
        <Row>
          <Col md="5">
            <Form.Group className="mb-3">
              <Form.Control
                name="title"
                type="text"
                label=""
                required
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
          <Col md="6">
            <div className="d-grid">
              <Button variant="primary" type="submit">
                Add New Visitor Type
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
