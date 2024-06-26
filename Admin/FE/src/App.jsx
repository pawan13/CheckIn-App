import { Route, Routes } from "react-router";
import "./App.css";
import ClientInfo from "./Pages/ClientInfo/ClientInfo";
import VisitorType from "./Pages/VisitorType/VisitorType.jsx";
import Signup from "./Pages/signup-signin/SignUp";
import SignIn from "./Pages/signup-signin/SignIn";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/main"
          element={
            <PrivateRoute>
              <VisitorType />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<SignIn />} />
        <Route
          path="/clientInfo"
          element={
            <PrivateRoute>
              <ClientInfo />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
