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
    const resPending = apiRegisterAdmin(obj);
    toast.promise(resPending, {
      pending: "Please wait ... ",
    });
    const { status, message } = await resPending;
    console.log(status, message);
    if (status === "SUCCESS") {
      // Navigate({ to: "/main" });
      toast.success("You have registered successfully!!");
    }
  } catch (error) {
    console.log("I am error");
    return toast.error(error.message);
  }
};

export const loginAdminUser = (obj) => async (dispatch) => {
  try {
    const resPending = apiLogInUser(obj);
    toast.promise(resPending, {
      pending: "Please wait ... ",
    });
    const { status, message, token } = await resPending;
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
