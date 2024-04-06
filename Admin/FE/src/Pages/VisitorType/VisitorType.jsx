import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NewVisitorForm } from "../../components/VisitorType/NewVisitorForm";
import { fetchAllVisitorAction } from "./VisitorAction";
import { VisitorTable } from "../../components/VisitorType/VisitorTable";
import { Button } from "react-bootstrap";
import { Layout } from "../../components/Layout/Layout";

const VisitorType = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllVisitorAction());
  }, [dispatch]);
  return (
    <>
      <Layout>
        <NewVisitorForm />
        <VisitorTable />
      </Layout>
    </>
  );
};

export default VisitorType;
