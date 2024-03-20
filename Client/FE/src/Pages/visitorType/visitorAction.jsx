import { apiCreateVisitorInfo, apiGetVisitors } from "../../helper/axios";
import { setVisitorTypeList } from "./visitorSlice";

export const fetchAllVisitorAction = () => async (dispatch) => {
  try {
    const { result, status, message } = await apiGetVisitors();

    if (status === "SUCCESS") {
      dispatch(setVisitorTypeList(result));
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const createVisitorInfoAction = (id, data) => async (dispatch) => {
  try {
    await apiCreateVisitorInfo(id, data);
    alert("Thanks for checking In");
  } catch (error) {
    console.log(error.message);
  }
};
