import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export const ClientInfoTable = () => {
  const { clientInfoList } = useSelector((state) => state.ClientInfoReducder);
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    setDisplay(clientInfoList);
  }, [clientInfoList]);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    setDisplay(
      clientInfoList.filter(({ fullName }) =>
        fullName.toLowerCase().includes(value.toLowerCase())
      )
    );
    e.target.reset();
  };
  return (
    <div className="mt-5">
      <div className="w-25 mb-3">
        <Form.Control onChange={handleOnSearch} placeholder="Search by name" />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Full Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>VisitorType</th>
            <th>EmailVerified</th>
            <th>checked In </th>
            <th>Checked Out</th>
          </tr>
        </thead>
        <tbody>
          {display.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>{item.visitorType}</td>
              <td>{item.isVerified}</td>
              <td>{new Date(item.createdAt).toLocaleString()}</td>
              <td>{item.checkedOut}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
