import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createVisitorInfoAction,
  fetchAllVisitorAction,
  generateOTPCodeAction,
  verifyOTPAction,
} from "./VisitorAction";
import CustomInput from "../../Components/custom-input/CustomInput";
import { Layout } from "../../Components/Layout/Layout";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { toast } from "react-toastify";
import "../../App.css";

const VisitorType = () => {
  const dispatch = useDispatch();
  const { visitorTypeList } = useSelector((state) => state.VisitorReducer);
  useEffect(() => {
    dispatch(fetchAllVisitorAction());
  }, [dispatch]);

  const [form, setForm] = useState({});
  const [visitorType, setVisitorType] = useState({});
  const [email, setEmail] = useState();
  const [show, setShow] = useState(false);
  const [otp, setOTP] = useState("");

  const handleClose = () => setShow(false);

  const inputs = [
    {
      name: "fullName",
      type: "text",
      placeholder: "Sam Smith",
      required: true,
      minLength: 3,
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
      placeholder: "+614xxxxxxxx",
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

  const handleOnCheckIn = (e) => {
    e.preventDefault();
    dispatch(createVisitorInfoAction({ ...form, ...visitorType }));
    generateOTPCodeAction(form.email);
    setShow(true);
    e.target.reset();
  };

  const handleVerifyOTP = () => {
    //OTP verification

    if (otp?.length < 5) {
      return toast.error("Please enter the correct otp");
    }
    verifyOTPAction(form.email, otp);
    //closing modal and proceed with check-in
    setShow(false);
  };

  //Check Out
  const inputCheckOut = [
    {
      name: "email",
      type: "email",
      placeholder: "Please enter the email",
      required: true,
    },
  ];

  const handleOncheckout = (e) => {
    e.preventDefault();
    generateOTPCodeAction(email);
    setShow(true);
    e.target.reset();
  };
  return (
    <Layout>
      <Tabs
        defaultActiveKey="checkIn"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="checkIn" title="Check In ">
          <div className="admin-form border p-3 shadow-lg rounded">
            <Form onSubmit={handleOnCheckIn}>
              <h1> Check In </h1>
              <hr />
              {inputs.map((item, i) => (
                <CustomInput key={i} {...item} onChange={handleOnChange} />
              ))}
              <Form.Group>
                <Form.Select
                  name="visitorType"
                  onChange={handleVisitorTypeChange}
                >
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
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Verify the Email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group>
                      <Form.Label>OTP</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOTP(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleVerifyOTP}>
                    Verify Email
                  </Button>
                </Modal.Footer>
              </Modal>
            </Form>
          </div>
        </Tab>
        <Tab eventKey="checkOut" title="Check Out">
          <div className="admin-form border p-3 shadow-lg rounded">
            <Form onSubmit={handleOncheckout}>
              <h1>Check Out </h1>
              <hr />
              {inputCheckOut.map((item, i) => (
                <CustomInput
                  key={i}
                  {...item}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ))}
              <p className="d-grid mt-3">
                <Button variant="primary" type="submit">
                  CheckOut
                </Button>
              </p>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Verify the Email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group>
                    <Form.Label>OTP</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOTP(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleVerifyOTP}>
                    Verify Email
                  </Button>
                </Modal.Footer>
              </Modal>
            </Form>
          </div>
        </Tab>
      </Tabs>
    </Layout>
  );
};

export default VisitorType;
