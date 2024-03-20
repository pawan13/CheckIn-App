import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NewVisitorForm } from "../../components/VisitorType/NewVisitorForm";
import { fetchAllVisitorAction } from "./VisitorAction";
import { VisitorTable } from "../../components/VisitorType/VisitorTable";

const VisitorType = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllVisitorAction());
  }, [dispatch]);
  return (
    <>
      <NewVisitorForm />
      <VisitorTable />
    </>
  );
};

export default VisitorType;
