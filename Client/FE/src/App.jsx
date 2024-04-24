import { useState } from "react";
import "./App.css";
import VisitorType from "./Pages/visitorType/VisitorType";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router";
import Thankyou from "./Pages/thankyou/Thankyou";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<VisitorType />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
