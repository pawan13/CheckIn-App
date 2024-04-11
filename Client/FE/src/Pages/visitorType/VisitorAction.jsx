import { apiGetVisitors } from "../../helper/axios";
import { toast } from "react-toastify";
import { setVisitorTypeList } from "./VisitorSlice";

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
