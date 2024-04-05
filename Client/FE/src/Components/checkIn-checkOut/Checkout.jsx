// CheckOut.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../custom-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { updateVisitorCheckOutInfoAction } from "../../Pages/visitorType/VisitorAction";

export const CheckOut = () => {
  const { visitorInfoList } = useSelector((state) => state.VisitorReducer);

  const [email, setEmail] = useState("");

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
      const currentDate = new Date().toDateString();
      const currentTime = new Date().toLocaleTimeString();
      const currentDateTime = `${currentDate}${currentTime}`;
      console.log(currentDate, currentTime, currentDateTime);
      await updateVisitorCheckOutInfoAction(email, currentDateTime);
    } else {
      toast.error("you must checkin to checkout");
    }
    e.target.reset();
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
          <Button variant="primary" type="submit">
            CheckOut
          </Button>
        </p>
      </Form>
    </div>
  );
};
