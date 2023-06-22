import { createSlice } from "@reduxjs/toolkit";
import { tvs as tvsAction } from "../tvs/TvSlice";

const initialState = {
  phones: 5,
  tablets: 10,
};

const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    phones: (state, action) => {
      //Action {type: 'phone/phones', payload: number}
      state.phones -= action.payload;
    },
    tablets: (state, action) => {
      //Action {type: 'phone/tablets, payload: number'}
      state.tablets -= action.payload;
    },
    addphones: (state, action) => {
      state.phones += action.payload;
    },
    addtablets: (state, action) => {
      state.tablets += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(tvsAction, (state, action) => {
      if (action.payload <= state.phones) {
        state.phones -= action.payload;
      } else if (action.payload > state.phones) {
        state.phones = 0;
      }
    });
  },

  //ALTERNATIVE EXTRAREDUCERS
  /* extraReducers: {
    ["tv/tvs"]: (state) => {
      state.phones--;
    },
  }, */
});

export default phoneSlice.reducer;
export const { phones, tablets, addphones, addtablets } = phoneSlice.actions;
