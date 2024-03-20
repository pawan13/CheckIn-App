import { configureStore } from "@reduxjs/toolkit";
import VisitorTypeReducder from "./Pages/VisitorType/VisitorSlice";
import ClientInfoReducder from "./Pages/ClientInfo/ClientInfoSlice";

export default configureStore({
  reducer: {
    VisitorTypeReducder: VisitorTypeReducder,
    ClientInfoReducder: ClientInfoReducder,
  },
});
