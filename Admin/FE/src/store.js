import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import VisitorTypeReducder from "./Pages/VisitorType/VisitorSlice";
import ClientInfoReducder from "./Pages/ClientInfo/ClientInfoSlice";
import AdminReducer from "./Pages/signup-signin/AdminSlice";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, AdminReducer);
export default configureStore({
  reducer: {
    VisitorTypeReducder: VisitorTypeReducder,
    ClientInfoReducder: ClientInfoReducder,
    AdminInfo: persistedReducer,
  },
});
