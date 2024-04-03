import { configureStore } from "@reduxjs/toolkit";
import VisitorReducer from "./Pages/visitor/visitorSlice";

export default configureStore({
  reducer: {
    VisitorReducer: VisitorReducer,
  },
});
