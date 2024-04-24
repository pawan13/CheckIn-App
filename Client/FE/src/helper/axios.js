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

export const apiCreateClientInfo = (data, recaptchaToken) => {
  return axiosProcessor({
    method: "post",
    body: { data, recaptchaToken },
    url: `${Base_URL}/client`,
  });
};

export const apiGetClientInfo = () => {
  return axiosProcessor({
    method: "get",
    url: `${Base_URL}/client`,
  });
};

export const apiReplaceClientInfo = (data) => {
  return axiosProcessor({
    method: "post",
    body: data,
    url: `${Base_URL}/client/replace`,
  });
};

export const apiUpdateClientCheckOutInfo = (email, checkedOut) => {
  console.log(email, checkedOut);
  return axiosProcessor({
    method: "patch",
    body: { email, checkedOut },
    url: `${Base_URL}/client/updateCheckout`,
  });
};

export const apiUpdateClientEmailverifyInfo = (email, isVerified) => {
  console.log(email, isVerified);
  return axiosProcessor({
    method: "patch",
    body: { email, isVerified },
    url: `${Base_URL}/client/updateEmailVerified`,
  });
};
// send otp code
export const apiGenerateOTP = (email) => {
  return axiosProcessor({
    method: "post",
    body: { email },
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
