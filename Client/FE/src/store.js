import { configureStore } from "@reduxjs/toolkit";
import VisitorReducer from "./Pages/visitorType/VisitorSlice";
import ClientReducer from "./Pages/ClientInfo/ClientInfoSlice";

export default configureStore({
  reducer: {
    VisitorReducer: VisitorReducer,
    ClientReducer: ClientReducer,
  },
});
