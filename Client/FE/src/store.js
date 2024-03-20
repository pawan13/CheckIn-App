import { configureStore } from "@reduxjs/toolkit";
import VisitorReducder from "./Pages/visitorType/visitorSlice";

export default configureStore({
  reducer: {
    VisitorReducder: VisitorReducder,
  },
});
