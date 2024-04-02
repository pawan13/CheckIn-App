import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visitorTypeList: [],
  visitorInfoList: [],
};
const VisitorSlice = createSlice({
  name: "visitorType",
  initialState,
  reducers: {
    setVisitorTypeList: (state, { payload }) => {
      state.visitorTypeList = payload;
    },
    setVisitorInfoList: (state, { payload }) => {
      state.visitorInfoList = payload;
    },
  },
});

const { reducer, actions } = VisitorSlice;

export const { setVisitorTypeList, setVisitorInfoList } = actions;

export default reducer;
