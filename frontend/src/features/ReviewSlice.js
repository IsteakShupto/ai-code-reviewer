import { createSlice } from "@reduxjs/toolkit";

const initialState = { text: "", loading: false };

export const ReviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReview: (state, action) => {
      (state.text = action.payload.text),
        (state.loading = action.payload.loading);
    },
  },
});

export const { setReview } = ReviewSlice.actions;
export default ReviewSlice.reducer;
