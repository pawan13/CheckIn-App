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
      <Button
        variant="primary"
        type="submit"
        style={{
          borderRadius: "8px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          borderColor: "#007bff",
        }}
      >
        <Link
          to="/clientInfo"
          style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
        >
          Client Info
        </Link>
      </Button>
      <NewVisitorForm />
      <VisitorTable />
    </>
  );
};

export default VisitorType;
