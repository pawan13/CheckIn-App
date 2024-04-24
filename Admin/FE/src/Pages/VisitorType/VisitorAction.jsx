import { apiCreateVisitor, apiGetVisitors } from "../../helper/axios";
import { setVisitorTypeList } from "./VisitorSlice";

export const addVisitorAction = (id, data) => async (dispatch) => {
  try {
    const { result, status, message } = await apiCreateVisitor(id, data);
    dispatch(fetchAllVisitorAction());
    alert("New Visitor category is created!");
  } catch (error) {
    console.log(error);
  }
};

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
