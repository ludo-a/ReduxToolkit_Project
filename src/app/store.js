import { configureStore } from "@reduxjs/toolkit";
import phonesReducer from "./features/phones/PhoneSlice";
import tvsReducer from "./features/tvs/TvSlice";
import commentReducer from "./features/comments/commentsSlice";

const store = configureStore({
  reducer: {
    phone: phonesReducer,
    television: tvsReducer,
    comment: commentReducer,
  },
});

export default store;
