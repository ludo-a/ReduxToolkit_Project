import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tvs: 10,
};

const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    tvs: (state, action) => {
      //Action {type: 'tv/tvs', payload;undefined}
      state.tvs -= action.payload;
    },
    addtvs: (state, action) => {
      state.tvs += action.payload;
    },
  },
});

export default tvSlice.reducer;
export const { tvs, addtvs } = tvSlice.actions;
