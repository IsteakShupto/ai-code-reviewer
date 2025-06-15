import { createSlice } from "@reduxjs/toolkit";

export const animals = [
  { id: 0, name: "Cat" },
  { id: 1, name: "Dog" },
  { id: 2, name: "Bird" },
  { id: 3, name: "Tiger" },
  { id: 4, name: "Rabbit" },
];

const initialState = animals[0];

export const AnimalsSlice = createSlice({
  name: "animal",
  initialState,
  reducers: {
    reset: () => initialState,
    choose: (state, action) => animals[Number(action.payload)],
  },
});

export const { reset, choose } = AnimalsSlice.actions;
export default AnimalsSlice.reducer;
