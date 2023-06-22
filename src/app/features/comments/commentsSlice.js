import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  comments: [],
  error: "",
};

export const fetchComments = createAsyncThunk("comments/fetchComments", () =>
  axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.data)
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
      state.error = "";
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.isLoading = false;
      state.comments = [];
      state.error = action.error.message;
    });
  },
});

export default commentSlice.reducer;

/*const fetchComments = createAsyncThunk("comments/fetchComments", () => {
  return (
    axios
      .get("https://jsonplaceholder.typicode.com/comments")

  
   * RequestStatus: 'Pending', 'Fulfilled', 'Rejected'
    //VERSION 1 
    Action{
      type: fetchComments.pending,
      meta: {requestId: string, requestStatus: 'pending'}
    }
    
    //VERSION 2
    Action{
      type: comments/fetchComments/pending,
      meta: {requestId: string, requestStatus: 'pending'}
    }

    Action{
      type: fetchComments/Fulfilled,
      payload: []
      meta: {requestId: string, requestStatus: 'pending'}
    }

    Action{
      type: fetchComments.rejected,
      meta: {requestId: string, requestStatus: 'pending'}
      error: {name: string, message: string, code: string }
    }
      .then((res) => res.data)
  );
});
*/
