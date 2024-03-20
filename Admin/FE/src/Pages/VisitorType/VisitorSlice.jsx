import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visitorTypeList: [],
  selectedVisitorType: {},
};
const VisitorTypeSlic = createSlice({
  name: "visitorType",
  initialState,
  reducers: {
    setVisitorTypeList: (state, { payload }) => {
      state.visitorTypeList = payload;
    },
    setSelectedVisitorType: (state, { payload }) => {
      state.selectedVisitorType = payload;
    },
  },
});

const { reducer, actions } = VisitorTypeSlic;

export const { setVisitorTypeList, setSelectedVisitorType } = actions;

export default reducer;
