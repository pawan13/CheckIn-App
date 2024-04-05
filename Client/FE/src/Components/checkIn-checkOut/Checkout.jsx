// CheckOut.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CustomInput from "../custom-input/CustomInput";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  generateOTPCodeAction,
  updateVisitorCheckOutInfoAction,
  verifyOTPCheckOutAction,
} from "../../Pages/visitorType/VisitorAction";

export const CheckOut = () => {
  const { visitorInfoList } = useSelector((state) => state.VisitorReducer);

  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [show, setShow] = useState(false);

  const handleCloseCheckOut = () => setShow(false);

  const inputCheckOut = [
    {
      name: "email",
      type: "email",
      placeholder: "Please enter the email",
      required: true,
    },
  ];
  const visitorEmails = visitorInfoList.reduce((acc, visitor) => {
    // Destructure each visitor object
    const { email, ...rest } = visitor;
    acc.push(email);
    return acc;
  }, []);

  const handleOncheckout = async (e) => {
    e.preventDefault();
    const lowerCaseVisitorEmails = visitorEmails.map((email) =>
      email.toLowerCase()
    );
    const result = lowerCaseVisitorEmails.includes(email.toLowerCase());
    if (result) {
      await generateOTPCodeAction(email);
      await updateVisitorCheckOutInfoAction(email, "true");
      setShow(true);
    } else {
      toast.error("you must checkin to checkout");
      setShow(false);
    }
    e.target.reset();
  };

  const handleCheckOutVerifyOTP = async (e) => {
    e.preventDefault();
    // Handle OTP verification for check-out
    if (otp?.length > 0) {
      await verifyOTPCheckOutAction(email, otp);
    } else {
      toast.error("OTP must be five digits");
    }
    setShow(false);
    setOTP("");
  };

  return (
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
          <Button disabled={show} variant="primary" type="submit">
            CheckOut
          </Button>
        </p>
        <Modal show={show} onHide={handleCloseCheckOut}>
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
            <Button variant="secondary" onClick={handleCloseCheckOut}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCheckOutVerifyOTP}>
              Verify Email
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </div>
  );
};
