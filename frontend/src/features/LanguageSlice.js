import { createSlice } from "@reduxjs/toolkit";

export const languages = [
  { id: 0, name: "JavaScript", monacoLang: "javascript" },
  { id: 1, name: "Python", monacoLang: "python" },
  { id: 2, name: "TypeScript", monacoLang: "typescript" },
  { id: 3, name: "C++", monacoLang: "cpp" },
  { id: 4, name: "Java", monacoLang: "java" },
];

const initialState = languages[0];

export const LanguageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    reset: () => initialState,
    choose: (state, action) => languages[Number(action.payload)],
  },
});

export const { reset, choose } = LanguageSlice.actions;
export default LanguageSlice.reducer;
