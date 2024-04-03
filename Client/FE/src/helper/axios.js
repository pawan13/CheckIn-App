import axios from "axios";

const Base_URL = "http://localhost:3001/api/v1";

const axiosProcessor = async ({ method, url = {}, body }) => {
  try {
    const { data } = await axios({
      method: method,
      url,
      data: body,
    });
    return data;
  } catch (error) {
    return {
      status: error,
      message: error,
    };
  }
};

// get visitor type
export const apiGetVisitors = () => {
  return axiosProcessor({
    method: "get",
    url: `${Base_URL}/visitor`,
  });
};

// VISITOR INFO OR CLIENT INFO

export const apiCreateVisitorInfo = (data) => {
  return axiosProcessor({
    method: "post",
    body: data,
    url: `${Base_URL}/client`,
  });
};

export const apiGetVisitorInfo = () => {
  return axiosProcessor({
    method: "get",
    url: `${Base_URL}/client`,
  });
};

export const apiUpdateVisitorInfo = (data) => {
  return axiosProcessor({
    method: "put",
    body: data,
    url: `${Base_URL}/client/update`,
  });
};

// send otp code
export const apiGenerateOTP = (data) => {
  return axiosProcessor({
    method: "post",
    body: data,
    url: `${Base_URL}/client/request-otp`,
  });
};

// verify email with otp code
export const apiVerifyOTPCode = (data) => {
  return axiosProcessor({
    method: "post",
    body: data,
    url: `${Base_URL}/client/verify-otp`,
  });
};
