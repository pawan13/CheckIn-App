import { apiGetClientInfo } from "../../helper/axios";
import { setClientInfoList } from "./ClientInfoSlice";

export const fetchAllClientInfoAction = () => async (dispatch) => {
  try {
    const { result, status } = await apiGetClientInfo();
    {
      console.log("result", result, status);
    }
    if (status == "SUCCESS") {
      dispatch(setClientInfoList(result));
    }
  } catch (error) {
    console.log(error);
  }
};
