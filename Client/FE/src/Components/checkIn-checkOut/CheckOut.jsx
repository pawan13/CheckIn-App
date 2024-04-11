// CheckOut.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomInput from "../custom-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { updateClientCheckOutInfoAction } from "../../Pages/ClientInfo/ClientInfoAction";
export const CheckOut = () => {
  const dispatch = useDispatch();
  const { clientInfoList } = useSelector((state) => state.ClientReducer);

  const [email, setEmail] = useState("");

  const inputCheckOut = [
    {
      name: "email",
      type: "email",
      placeholder: "Please enter the email",
      required: true,
    },
  ];
  const visitorEmails = clientInfoList.reduce((acc, visitor) => {
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
      dispatch(updateClientCheckOutInfoAction(email, currentDateTime));
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
