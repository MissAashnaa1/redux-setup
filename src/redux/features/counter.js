import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count1: 0,
  count2: 9,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment1: (state) => {
      state.count1 += 1;
    },
    increment2: (state) => {
      state.count2 += 1;
    },
    decrement1: (state) => {
      state.count1 -= 1;
    },
    decrement2: (state) => {
      state.count2 -= 1;
    },
    change1: (state, action) => {
      state.count1 = action.payload;
    },
    change2: (state, action) => {
      state.count2 = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment1,
  decrement1,
  increment2,
  decrement2,
  change1,
  change2,
} = counterSlice.actions;

export default counterSlice.reducer;
