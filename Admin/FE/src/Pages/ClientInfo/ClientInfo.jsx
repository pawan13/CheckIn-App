import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ClientInfoTable } from "../../components/ClientInfo/ClientInfoTable";
import { fetchAllClientInfoAction } from "./ClientInfoAction";
import { useSelector } from "react-redux";
import { Layout } from "../../components/Layout/Layout";

const ClientInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllClientInfoAction());
  }, [dispatch]);
  return (
    <>
      <Layout>
        <ClientInfoTable />
      </Layout>
    </>
  );
};

export default ClientInfo;
