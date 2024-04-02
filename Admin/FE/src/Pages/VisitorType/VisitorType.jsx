import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NewVisitorForm } from "../../components/VisitorType/NewVisitorForm";
import { fetchAllVisitorAction } from "./VisitorAction";
import { VisitorTable } from "../../components/VisitorType/VisitorTable";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const VisitorType = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllVisitorAction());
  }, [dispatch]);
  return (
    <>
      <Button variant="primary" type="submit">
        <Link to="/clientInfo">ClientInfo</Link>
      </Button>
      <NewVisitorForm />
      <VisitorTable />
    </>
  );
};

export default VisitorType;
