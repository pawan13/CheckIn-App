import { useState } from "react";
import "./App.css";
import VisitorType from "./Pages/visitorType/VisitorType";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router";
import { CheckOut } from "./Components/checkIn-checkOut/CheckOut";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<VisitorType />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
