import React, { useState } from "react";
import { Layout } from "../../Components/Layout/Layout";
import { Tab, Tabs } from "react-bootstrap";
import { CheckIn } from "../../Components/checkIn-checkOut/CheckIn";
import { CheckOut } from "../../Components/checkIn-checkOut/CheckOut";

const VisitorType = () => {
  const [refresh, setRefresh] = useState(false);

  const handleTabSelect = (key) => {
    // Set refresh to true to trigger page refresh
    setRefresh(true);

    // setting refresh back to false
    setTimeout(() => {
      setRefresh(false);
    }, 100);
  };
  return (
    <Layout>
      <Tabs
        defaultActiveKey="checkIn"
        id="uncontrolled-tab-example"
        className="mb-3"
        onSelect={handleTabSelect}
      >
        <Tab eventKey="checkIn" title="Check In">
          {refresh ? <CheckIn key="checkIn" /> : <CheckIn />}
        </Tab>
        <Tab eventKey="checkOut" title="Check Out">
          {refresh ? <CheckOut key="checkOut" /> : <CheckOut />}
        </Tab>
      </Tabs>
    </Layout>
  );
};

export default VisitorType;
