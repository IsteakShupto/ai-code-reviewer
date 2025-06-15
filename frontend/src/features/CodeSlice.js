import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const CodeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    setCode: (state, action) => action.payload,
  },
});

export const { setCode } = CodeSlice.actions;
export default CodeSlice.reducer;
