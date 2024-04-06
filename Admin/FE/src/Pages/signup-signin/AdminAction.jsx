import { Navigate } from "react-router";
import { setAdmin } from "./AdminSlice";
import {
  apiGetAdminInfo,
  apiLogInUser,
  apiLogOutUser,
  apiRegisterAdmin,
} from "../../helper/axios";
import { toast } from "react-toastify";

export const createAdminAuth = async (obj) => {
  try {
    const { status, message } = await apiRegisterAdmin(obj);
    if (status === "error") {
      toast.error("something went wrong!!");
    }
  } catch (error) {
    console.log("I am error");
    return toast.error(error.message);
  }
};

export const loginAdminUser = (obj) => async (dispatch) => {
  try {
    const { status, token } = await apiLogInUser(obj);
    console.log(status);
    if (status === "SUCCESS") {
      // We will get token
      localStorage.setItem("accessJWT", token.accessJWT);
      localStorage.setItem("refreshJWT", token.refreshJWT);
      dispatch(getAdminInfo());
    } else if (status === "error") {
      toast.error("Email or password didn't match");
    }
  } catch (error) {
    console.log(error);
    return toast.error(error);
  }
};

export const getAdminInfo = () => async (dispatch) => {
  try {
    const { admin } = await apiGetAdminInfo();
    if (admin) {
      dispatch(setAdmin(admin));
    }
  } catch (error) {
    toast.error(error.message);
    console.log(error);
  }
};

export const logOutAdminUserAction = () => (dispatch) => {
  try {
    console.log("logout");
    apiLogOutUser();
    sessionStorage.removeItem("accessJWT");
    sessionStorage.removeItem("refreshJWT");
    dispatch(setAdmin({}));
  } catch (error) {
    toast.error(error.message);
    console.error("Logout error:", error);
  }
};
