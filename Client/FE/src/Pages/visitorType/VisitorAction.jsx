import {
  apiCreateVisitorInfo,
  apiGenerateOTP,
  apiGetVisitorInfo,
  apiGetVisitors,
  apiReplaceVisitorInfo,
  apiUpdateVisitorCheckOutInfo,
  apiUpdateVisitorEmailverifyInfo,
  apiVerifyOTPCode,
} from "../../helper/axios";
import { toast } from "react-toastify";
import { setVisitorInfoList, setVisitorTypeList } from "./VisitorSlice";

export const fetchAllVisitorAction = () => async (dispatch) => {
  try {
    const { result, status, message } = await apiGetVisitors();
    console.log(result);
    if (status === "SUCCESS") {
      dispatch(setVisitorTypeList(result));
    }
  } catch (error) {
    toast.error(error.message);
  }
};

//VisitorInfo or ClientInfo
export const createVisitorInfoAction = (data) => async (dispatch) => {
  console.log(data);
  try {
    const { status, message } = await apiCreateVisitorInfo(data);
    console.log(status);
    if (status === "SUCCESS") {
      toast.success("Please verify the email with OTP");
    } else {
      console.log(message);
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchAllVisitorInfoAction = () => async (dispatch) => {
  try {
    const { result, status } = await apiGetVisitorInfo();
    console.log(result);
    if (status === "SUCCESS") {
      dispatch(setVisitorInfoList(result));
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const replaceVIsitorInfoAction = (data) => async (dispatch) => {
  try {
    const { status, message } = await apiReplaceVisitorInfo(data);
    if (status === "SUCCESS") {
      toast.success("Please verify the email with OTP");
    } else {
      return toast.error(message);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const updateVisitorCheckOutInfoAction = async (email, checkOut) => {
  try {
    console.log("inAction", email, checkOut);
    const { status, message } = await apiUpdateVisitorCheckOutInfo(
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
export const updateVisitorEmailVerifiedInfoAction = async (
  email,
  isVerified
) => {
  try {
    const { status, message } = await apiUpdateVisitorEmailverifyInfo(
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
    const { status, message } = await apiGenerateOTP({ email });
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
