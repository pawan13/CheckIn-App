import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientInfoList: [],
};

const clientInfoSlice = createSlice({
  name: "ClientInfo",
  initialState,
  reducers: {
    setClientInfoList: (state, { payload }) => {
      state.clientInfoList = payload;
    },
  },
});
const { reducer, actions } = clientInfoSlice;
export const { setClientInfoList } = actions;
export default reducer;
