import { Route, Routes } from "react-router";
import "./App.css";
import ClientInfo from "./Pages/ClientInfo/ClientInfo";
import VisitorType from "./Pages/VisitorType/VisitorType";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<VisitorType />} />
        <Route path="/clientInfo" element={<ClientInfo />} />
      </Routes>
      {/* <VisitorType />
      <ClientInfo /> */}
    </>
  );
}

export default App;
