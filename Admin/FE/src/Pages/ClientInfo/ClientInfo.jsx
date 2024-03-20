import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ClientInfoTable } from "../../components/ClientInfo/ClientInfoTable";
import { fetchAllClientInfoAction } from "./ClientInfoAction";

const ClientInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllClientInfoAction());
  }, [dispatch]);
  return (
    <>
      <ClientInfoTable />
    </>
  );
};

export default ClientInfo;
