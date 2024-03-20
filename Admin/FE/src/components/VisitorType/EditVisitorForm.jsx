import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const EditVisitorForm = () => {
  //   const dispatch = useDispatch();
  //   const [form, setForm] = useState({});
  //   const { selectedCat } = useSelector((state) => state.categories);

  //   useEffect(() => {
  //     setForm(selectedCat);
  //   }, [selectedCat]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // dispatch(addCategoryAction(form));
    console.log("submitted!");
  };

  const handleOnChange = (e) => {
    let { name, value } = e.target;

    setForm({
      [name]: value,
    });
  };

  const handleOnDelete = () => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      //   dispatch(deleteCat());
      console.log("delete");
    }
  };

  return (
    <>
      <Form
        className=" border p-5 shadow-lg rounded mt-3"
        onSubmit={handleOnSubmit}
      >
        <Row>
          <Col md="2">
            <Form.Group className="mb-3">
              <Form.Check
                name="status"
                type="switch"
                label="Status"
                onChange={handleOnChange}
                checked={form.status === "active"}
              />
            </Form.Group>
          </Col>
          <Col md="5">
            <Form.Group className="mb-3">
              <Form.Control
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleOnChange}
              />
              <Form.Label>{`Slug: ${form.slug}`}</Form.Label>
            </Form.Group>
            <br />
          </Col>

          <Col md="5">
            <div className="d-grid">
              <Button variant="primary" type="submit">
                Update Category
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
      <div className="d-grid">
        <Button onClick={handleOnDelete} variant="danger">
          Delete
        </Button>
      </div>
    </>
  );
};
