// CheckIn.js
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllVisitorAction } from "../../Pages/visitorType/VisitorAction";
import CustomInput from "../custom-input/CustomInput";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import {
  createClientInfoAction,
  fetchAllClientInfoAction,
  generateOTPCodeAction,
  replaceClientInfoAction,
  updateClientEmailVerifiedInfoAction,
  verifyOTPAction,
} from "../../Pages/ClientInfo/ClientInfoAction";

export const CheckIn = () => {
  const dispatch = useDispatch();
  const { visitorTypeList } = useSelector((state) => state.VisitorReducer);
  const { clientInfoList } = useSelector((state) => state.ClientReducer);
  useEffect(() => {
    dispatch(fetchAllVisitorAction());
    dispatch(fetchAllClientInfoAction());
  }, [dispatch]);

  const [form, setForm] = useState({});
  const [visitorType, setVisitorType] = useState({});
  const [otp, setOTP] = useState("");
  const [show, setShow] = useState(false);
  const [allowPromotion, setAllowPromotion] = useState(true);
  const recaptchaRef = useRef();

  const handleCloseCheckIn = () => setShow(false);

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
      required: true,
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

  const handlePromotiomPermission = (e) => {
    setAllowPromotion(!allowPromotion);
  };
  const visitorEmails = clientInfoList?.reduce((acc, visitor) => {
    // Destructure each visitor object
    const { email } = visitor;
    acc.push(email);
    return acc;
  }, []);
  const handleOnCheckIn = async (e) => {
    e.preventDefault();
    // Recaptcha logic

    const recaptchaToken = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();
    console.log("token in checkin", recaptchaToken);

    // Handle check-in logic
    const lowerCaseVisitorEmails = visitorEmails?.map((email) =>
      email.toLowerCase()
    );

    const result = lowerCaseVisitorEmails?.includes(form.email.toLowerCase());
    console.log(result);
    const data = { ...form, ...visitorType, allowPromotion };
    if (result) {
      dispatch(replaceClientInfoAction(data));
    } else {
      dispatch(createClientInfoAction(data, recaptchaToken));
    }
    await generateOTPCodeAction(form.email);

    setShow(true);

    e.target.reset();
  };

  const handleVerifyOTP = async () => {
    console.log(form.email, otp);
    if (otp?.length > 0) {
      await verifyOTPAction(form.email, otp);
    } else {
      toast.error("You must fill the OTP");
    }
    dispatch(updateClientEmailVerifiedInfoAction(form.email, "Verified"));
    setShow(false);
  };

  return (
    <div className="admin-form border p-3 shadow-lg rounded">
      <Form onSubmit={handleOnCheckIn} disabled={show}>
        <h1> Check In </h1>
        <hr />
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}
        <Form.Group>
          <Form.Select name="visitorType" onChange={handleVisitorTypeChange}>
            {visitorTypeList.map((item, i) => (
              <option key={i} value={item.title}>
                {item.title}
              </option>
            ))}
          </Form.Select>
          <Form.Check
            name="allowPromotion"
            onChange={handlePromotiomPermission}
            type="checkbox"
            label="Allow Made In Nepal expo to send email for promotion"
            id={`promotionCheckbox`}
            defaultChecked
          />
        </Form.Group>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey="6LeUcrQpAAAAAAq9jutgT36v77bowPToQOiTB6pi"
        />
        <p className="d-grid mt-3">
          <Button disabled={show} variant="primary" type="submit">
            CheckIn
          </Button>
        </p>
        <Modal show={show} onHide={handleCloseCheckIn}>
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
            <Button variant="secondary" onClick={handleCloseCheckIn}>
              Close
            </Button>
            <Button variant="primary" onClick={handleVerifyOTP}>
              Verify Email
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </div>
  );
};
