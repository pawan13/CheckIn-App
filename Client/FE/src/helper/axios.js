import axios from "axios";

const Base_URL = "https://checkin-app.onrender.com/api/v1";

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

export const apiReplaceVisitorInfo = (data) => {
  return axiosProcessor({
    method: "post",
    body: data,
    url: `${Base_URL}/client/replace`,
  });
};

export const apiUpdateVisitorCheckOutInfo = (email, checkedOut) => {
  console.log(email, checkedOut);
  return axiosProcessor({
    method: "patch",
    body: { email, checkedOut },
    url: `${Base_URL}/client/updateCheckout`,
  });
};

export const apiUpdateVisitorEmailverifyInfo = (email, isVerified) => {
  console.log(email, isVerified);
  return axiosProcessor({
    method: "patch",
    body: { email, isVerified },
    url: `${Base_URL}/client/updateEmailVerified`,
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
export const apiVerifyOTPCode = (email, otp) => {
  return axiosProcessor({
    method: "post",
    body: { email, otp },
    url: `${Base_URL}/client/verify-otp`,
  });
};
