import axios from "axios";
import { setAdmin } from "../Pages/signup-signin/AdminSlice";

const Base_URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000/api/v1"
    : "https://checkin-app.onrender.com/api/v1";

const axiosProcessor = async ({
  method,
  url = {},
  body,
  isPrivate = false,
  withRefreshToken = false,
}) => {
  const headers = {
    Authorization: isPrivate
      ? withRefreshToken
        ? localStorage.getItem("refreshJWT")
        : localStorage.getItem("accessJWT")
      : "",
  };
  console.log("Auth", url);
  try {
    const { data } = await axios({
      method: method,
      url,
      data: body,
      headers,
    });
    return data;
  } catch (error) {
    if (error?.response?.data?.message === "jwt expired") {
      console.log("I am expired!");
      const { status, accessJWT } = await apiGetNewAccessToken();
      if (status === "SUCCESS") {
        localStorage.setItem("accessJWT", accessJWT);
      }
      return axiosProcessor({ method, url, body, isPrivate, withRefreshToken });
    }
    return {
      status: "error",
      message: error?.response?.data?.message || error.message,
    };
  }
};

//refresh Token
export const apiGetNewAccessToken = () => {
  // post axios
  return axiosProcessor({
    method: "get",
    url: `${Base_URL}/admin/get-accessjwt`,
    withRefreshToken: true,
    isPrivate: true,
  });
};
//Admin
export const apiRegisterAdmin = (data) => {
  console.log(data);
  return axiosProcessor({
    method: "post",
    body: data,
    url: `${Base_URL}/admin`,
  });
};
export const apiLogInUser = (data) => {
  return axiosProcessor({
    method: "post",
    body: data,
    url: `${Base_URL}/admin/login`,
  });
};
export const apiGetAdminInfo = () => {
  // post axios
  return axiosProcessor({
    method: "get",
    url: `${Base_URL}/admin/info`,
    isPrivate: true,
  });
};
export const apiLogOutUser = () => async (dispatch) => {
  const accessJWT = localStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");
  sessionStorage.removeItem("accessJWT");
  sessionStorage.removeItem("refreshJWT");
  await axiosProcessor({
    method: "post",
    body: {
      accessJWT: accessJWT,
      refreshJWT: refreshJWT,
    },
    url: `${Base_URL}/admin/logout`,
  });
  dispatch(setAdmin({}));
};
//VisitorType
export const apiGetVisitors = () => {
  return axiosProcessor({
    method: "get",
    url: `${Base_URL}/visitor`,
    isPrivate: true,
  });
};
export const apiCreateVisitor = (data) => {
  return axiosProcessor({
    method: "post",
    body: data,
    url: `${Base_URL}/visitor`,
    isPrivate: true,
  });
};
export const apiUpdateVisitor = (id, data) => {
  return axiosProcessor({
    method: "put",
    body: data,
    url: `${Base_URL}/visitor/${id}`,
    isPrivate: true,
  });
};

//ClientInfo

export const apiGetClientInfo = () => {
  return axiosProcessor({
    method: "get",
    url: `${Base_URL}/client`,
    isPrivate: true,
  });
};
