import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visitorTypeList: [],
};
const VisitorSlice = createSlice({
  name: "visitorType",
  initialState,
  reducers: {
    setVisitorTypeList: (state, { payload }) => {
      state.visitorTypeList = payload;
    },
  },
});

const { reducer, actions } = VisitorSlice;

export const { setVisitorTypeList } = actions;

export default reducer;
