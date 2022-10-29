import { createSlice } from "@reduxjs/toolkit";
import { amountReducer } from "../reducers/amountReducers";

const initialState = {
  amount: parseInt(prompt("Enter amount in number")),
};

const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    setAmount: amountReducer,
  },
});

export const { setAmount } = amountSlice.actions;

export default amountSlice.reducer;
