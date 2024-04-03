import {
  apiCreateVisitorInfo,
  apiGenerateOTP,
  apiGetVisitorInfo,
  apiGetVisitors,
  apiUpdateVisitorInfo,
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
    const { status, message } = await apiCreateVisitorInfo(data);
    if (status === "SUCCESS") {
      toast.success("Please verify the email with OTP");
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
    toast.error(error.message);
  }
};

export const updateVIsitorInfoAction = async (data) => {
  try {
    const { status } = await apiUpdateVisitorInfo(data);
    if (status === "SUCCESS") {
      toast.success("Please verify the email with OTP");
    }
  } catch (error) {
    toast.error(error.message);
    console.log(error.message);
  }
};
// Generate the OTP
export const generateOTPCodeAction = async (email) => {
  try {
    const { status } = await apiGenerateOTP({ email });
    if (status === "SUCCESS") {
      toast.success("Please check your email for OTP");
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const verifyOTPAction = async (email, otp) => {
  try {
    const { status, message } = await apiVerifyOTPCode({ email, otp });
    if (status === "SUCCESS") {
      toast.success("Thanks for checking In");
    }
  } catch (error) {
    toast.error(error.message);
  }
};

// export const verifyOTPCheckOutAction = async (email, otp) => {
//   try {
//     const { status, message } = await apiVerifyOTPCode({ email, otp });
//     if (status === "SUCCESS") {
//       toast.success("Thanks for checking out");
//     }
//   } catch (error) {
//     toast.error(error.message);
//   }
// };
