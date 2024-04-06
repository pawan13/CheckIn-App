import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export const VisitorTable = () => {
  const { visitorTypeList } = useSelector((state) => state.VisitorTypeReducder);
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    setDisplay(visitorTypeList);
  }, [visitorTypeList]);

  const handleOnSearch = (e) => {
    const { value } = e.target;

    setDisplay(
      visitorTypeList.filter(({ title }) =>
        title.toLowerCase().includes(value.toLowerCase())
      )
    );
    e.target.reset();
  };
  return (
    <div className="mt-5">
      <div className="w-25 mb-3">
        <Form.Control onChange={handleOnSearch} placeholder="Search by name" />
      </div>
      <Table striped bordered hover className="w-80">
        <thead>
          <tr>
            <th>#</th>
            <th> Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {display.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
