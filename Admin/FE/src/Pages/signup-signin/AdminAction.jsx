import { Navigate } from "react-router";
import { setAdmin } from "./AdminSlice";
import {
  apiGetAdminInfo,
  apiLogInUser,
  apiRegisterAdmin,
} from "../../helper/axios";

export const createAdminAuth = async (obj) => {
  try {
    const { status, message } = await apiRegisterAdmin(obj);
    console.log(status);
  } catch (error) {
    console.log("I am error");
    // toast.error(error.message);
  }
};

export const loginAdminUser = (obj) => async (dispatch) => {
  try {
    const { status, message, token } = await apiLogInUser(obj);
    console.log(status, message, token);
    // alert(message);
    if (status === "SUCCESS") {
      // We will get token, what to do with it?
      localStorage.setItem("accessJWT", token.accessJWT);
      localStorage.setItem("refreshJWT", token.refreshJWT);
      dispatch(getAdminInfo());
    }
  } catch (error) {
    // toast.error(error.message);
    console.log(error.message);
  }
};

export const getAdminInfo = () => async (dispatch) => {
  try {
    const { admin } = await apiGetAdminInfo();
    if (admin) {
      dispatch(setAdmin(admin));
    }
  } catch (error) {
    // toast.error(error.message);
    console.log(error);
  }
};
