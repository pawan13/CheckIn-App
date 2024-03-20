import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createVisitorInfoAction,
  fetchAllVisitorAction,
} from "./visitorAction";
import CustomInput from "../../Components/custom-input/CustomInput";
import { Layout } from "../../Components/Layout/Layout";
import { Button, Form } from "react-bootstrap";
import "../../App.css";

const VisitorType = () => {
  const dispatch = useDispatch();
  const { visitorTypeList } = useSelector((state) => state.VisitorReducder);
  useEffect(() => {
    dispatch(fetchAllVisitorAction());
  }, [dispatch]);

  const [form, setForm] = useState({});
  const [visitorType, setVisitorType] = useState({});

  const inputs = [
    {
      name: "fullName",
      type: "text",
      placeholder: "Sam Smith",
      required: true,
      minLength: 6,
    },
    {
      name: "email",
      type: "email",
      placeholder: "samsmith01@gmail.com",
      required: true,
    },
    {
      name: "mobile",
      type: "number",
      placeholder: "04xxxxxxxx",
      required: false,
      minLength: 10,
    },
  ];

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleVisitorTypeChange = (e) => {
    let { name, value } = e.target;
    setVisitorType({
      ...visitorType,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createVisitorInfoAction({ ...form, ...visitorType }));
  };
  return (
    <Layout>
      <div className="admin-form border p-3 shadow-lg rounded">
        <Form onSubmit={handleOnSubmit}>
          <h1>Please Check In </h1>
          <hr />
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}
          <Form.Group>
            <Form.Select name="visitorType" onChange={handleVisitorTypeChange}>
              <option>Select One</option>
              {visitorTypeList.map((item, i) => (
                <option key={i} value={item.title}>
                  {item.title}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <p className="d-grid mt-3">
            <Button variant="primary" type="submit">
              CheckIn
            </Button>
          </p>
        </Form>
      </div>
    </Layout>
  );
};

export default VisitorType;
