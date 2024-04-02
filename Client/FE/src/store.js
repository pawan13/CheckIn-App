import { configureStore } from "@reduxjs/toolkit";
import VisitorReducer from "./Pages/visitorType/VisitorSlice";

export default configureStore({
  reducer: {
    VisitorReducer: VisitorReducer,
  },
});
