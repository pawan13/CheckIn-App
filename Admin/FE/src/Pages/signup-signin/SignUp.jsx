import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Footer from "../../components/Layout/Footer";
import CustomInput from "../../components/custom-input/CustomInput";
import { createAdminAuth } from "./AdminAction";
import { useDispatch } from "react-redux";
import { setAdmin } from "./AdminSlice";

const SignUp = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;

    if (form.password !== confirmPassword) {
      return alert("Your passwords must match 😀!!!");
    }
    createAdminAuth(rest);
    dispatch(setAdmin(rest));
  };
  const inputs = [
    {
      name: "fName",
      type: "text",
      placeholder: "Sam",
      required: true,
    },
    {
      name: "lName",
      type: "text",
      placeholder: "Steve",

      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "samsmith01@gmail.com",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "xxxxxxxxxx",
      required: false,
      minLength: 10,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "xxxxxxxxxx",
      required: false,
      minLength: 10,
    },
  ];
  return (
    <>
      <main className="main">
        <Form
          className="register border p-5 shadow-lg rounded mt-5"
          onSubmit={handleOnSubmit}
        >
          <h1>New Admin Registration</h1>
          <hr />
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}
          <div className="d-grid">
            <Button variant="primary" type="submit">
              Create Admin Account
            </Button>
          </div>
        </Form>
      </main>
      <Footer />
    </>
  );
};

export default SignUp;
