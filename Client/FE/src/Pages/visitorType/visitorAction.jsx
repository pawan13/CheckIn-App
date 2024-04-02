import {
  apiCreateVisitorInfo,
  apiGenerateOTP,
  apiGetVisitorInfo,
  apiGetVisitors,
  apiVerifyOTPCode,
} from "../../helper/axios";
import { toast } from "react-toastify";
import { setVisitorInfoList, setVisitorTypeList } from "./VisitorSlice";

export const fetchAllVisitorAction = () => async (dispatch) => {
  try {
    const { result, status, message } = await apiGetVisitors();

    if (status === "SUCCESS") {
      dispatch(setVisitorTypeList(result));
    }
  } catch (error) {
    toast.error(error.message);
  }
};

//VisitorInfo or ClientInfo
export const createVisitorInfoAction = (data) => async (dispatch) => {
  try {
    const { status } = await apiCreateVisitorInfo(data);
    dispatch(fetchAllVisitorInfoAction());
    if (status === "SUCCESS") {
      toast.success("Please verify the email with OTP");
    } else {
      toast.error("Please check and fill the correct details");
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchAllVisitorInfoAction = () => async (dispatch) => {
  try {
    const { result, status } = await apiGetVisitorInfo();
    if (status === "SUCCESS") {
      dispatch(setVisitorInfoList(result));
    }
  } catch (error) {
    toast.error(error);
  }
};

// Generate the OTP
export const generateOTPCodeAction = async (email) => {
  try {
    console.log("email", email);
    const { status } = await apiGenerateOTP({ email });
    if (status === "SUCCESS") {
      toast.success("Please check your email for OTP");
    } else if (status.message === "Request failed with status code 500") {
      toast.error("You need to check in first to checkout");
    }
  } catch (error) {
    toast.error(error);
  }
};

export const verifyOTPAction = async (email, otp) => {
  try {
    const { status, message } = await apiVerifyOTPCode({ email, otp });
    if (status === "SUCCESS") {
      toast.success("Thanks for checking In or out");
    } else if (status.message === "Request failed with status code 400") {
      toast.error("Your otp didn't match with the otp sent to your email");
    }
  } catch (error) {
    toast.error(error);
  }
};
