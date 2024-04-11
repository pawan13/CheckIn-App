import {
  apiCreateClientInfo,
  apiGenerateOTP,
  apiGetClientInfo,
  apiReplaceClientInfo,
  apiUpdateClientCheckOutInfo,
  apiUpdateClientEmailverifyInfo,
  apiVerifyOTPCode,
} from "../../helper/axios";
import { toast } from "react-toastify";
import { setClientInfoList } from "./ClientInfoSlice";

// ClientInfo
export const createClientInfoAction =
  (data, recaptchaToken) => async (dispatch) => {
    console.log(data);
    try {
      const { status, message } = await apiCreateClientInfo(
        data,
        recaptchaToken
      );
      dispatch(fetchAllClientInfoAction);
      if (status === "SUCCESS") {
        toast.success("Please verify the email with OTP");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

export const fetchAllClientInfoAction = () => async (dispatch) => {
  try {
    const { result, status } = await apiGetClientInfo();
    console.log(result);
    if (status === "SUCCESS") {
      dispatch(setClientInfoList(result));
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const replaceClientInfoAction = (data) => async (dispatch) => {
  try {
    const { status, message } = await apiReplaceClientInfo(data);
    if (status === "SUCCESS") {
      toast.success("Please verify the email with OTP");
    } else {
      return toast.error(message);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const updateClientCheckOutInfoAction = async (email, checkOut) => {
  try {
    console.log("inAction", email, checkOut);
    const { status, message } = await apiUpdateClientCheckOutInfo(
      email,
      checkOut
    );
    console.log(status);
    if (status === "SUCCESS") {
      toast.success("Thanks for checking out!!");
    } else {
      return toast.error(message);
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const updateClientEmailVerifiedInfoAction =
  (email, isVerified) => async (dispatch) => {
    try {
      const { status, message } = await apiUpdateClientEmailverifyInfo(
        email,
        isVerified
      );
      console.log(status);
      if (status === "SUCCESS") {
        toast.success("Please verify the email with OTP");
      } else {
        return toast.error(message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
// Generate the OTP
export const generateOTPCodeAction = async (email) => {
  try {
    console.log(email);
    const { status, message } = await apiGenerateOTP(email);
    console.log(status);
    if (status === "SUCCESS") {
      toast.success("Please check your email for OTP");
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const verifyOTPAction = async (email, otp) => {
  try {
    console.log(email, otp);
    const { status, message } = await apiVerifyOTPCode(email, otp);
    if (status === "SUCCESS") {
      toast.success("Thanks for checking In");
    }
  } catch (error) {
    toast.error(error.message);
  }
};
