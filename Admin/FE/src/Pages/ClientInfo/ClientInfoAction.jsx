import { apiGetClientInfo } from "../../helper/axios";
import { setClientInfoList } from "./ClientInfoSlice";

export const fetchAllClientInfoAction = () => async (dispatch) => {
  try {
    const { result, status } = await apiGetClientInfo();
    if (status == "SUCCESS") {
      dispatch(setClientInfoList(result));
    }
  } catch (error) {
    console.log(error);
  }
};