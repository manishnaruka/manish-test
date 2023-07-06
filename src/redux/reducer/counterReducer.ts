import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

const { increment, decrement } = counterSlice.actions;
const reducer = counterSlice.reducer

export {
  increment, decrement,
  reducer as counterReducer
}