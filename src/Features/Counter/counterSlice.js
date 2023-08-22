import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first_name: "Sergio",
  last_name: "Quijano",
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseAmount: (state) => {
      state.value += 1;
    },
    decreaseAmount: (state) => {
      state.value -= 1;
    },
  },
});

export const { increaseAmount, decreaseAmount } = counterSlice.actions;

export default counterSlice.reducer;
