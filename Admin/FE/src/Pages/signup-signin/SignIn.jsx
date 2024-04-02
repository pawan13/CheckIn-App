import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdminUser } from "./AdminAction";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../components/custom-input/CustomInput";
import Footer from "../../components/Layout/Footer";

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.AdminInfo);
  useEffect(() => {
    if (admin?._id && isLoggedIn) {
      console.log("Navigating now!!");
      navigate("/main");
    }
  }, [admin, isLoggedIn, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginAdminUser(form));
    console.log(admin);
    setIsLoggedIn(true);
  };
  const inputs = [
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
  ];
  return (
    <>
      <main className="main">
        <Form
          className="register border p-5 shadow-lg rounded mt-5"
          onSubmit={handleOnSubmit}
        >
          <h1>Admin LogIn - Welcome</h1>
          <hr />
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}
          <div className="d-grid">
            <Button varient="primary" type="submit">
              LogIn
            </Button>
          </div>
        </Form>
      </main>
      <Footer />
    </>
  );
};

export default SignIn;
