import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ClientInfoTable } from "../../components/ClientInfo/ClientInfoTable";
import { fetchAllClientInfoAction } from "./ClientInfoAction";
import { useSelector } from "react-redux";
import { Layout } from "../../components/Layout/Layout";

const ClientInfo = () => {
  const dispatch = useDispatch();
  const { clientInfoList } = useSelector((state) => state.ClientInfoReducder);
  useEffect(() => {
    dispatch(fetchAllClientInfoAction());
  }, [dispatch, clientInfoList]);
  return (
    <>
      <Layout>
        <ClientInfoTable />
      </Layout>
    </>
  );
};

export default ClientInfo;
