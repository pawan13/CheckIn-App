import React from "react";
import { Layout } from "../../Components/Layout/Layout";
import { Tab, Tabs } from "react-bootstrap";
import { CheckIn } from "../../Components/checkIn-checkOut/CheckIn";
import { CheckOut } from "../../Components/checkIn-checkOut/CheckOut";

const VisitorType = () => {
  return (
    <Layout>
      <Tabs
        defaultActiveKey="checkIn"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="checkIn" title="Check In">
          <CheckIn />
        </Tab>
        <Tab eventKey="checkOut" title="Check Out">
          <CheckOut />
        </Tab>
      </Tabs>
    </Layout>
  );
};

export default VisitorType;
