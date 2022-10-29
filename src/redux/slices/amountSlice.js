import { createSlice } from "@reduxjs/toolkit";
import { amountReducer } from "../reducers/amountReducers";

const getAmount = () => {
  const amt = parseInt(prompt("Enter amount in number (default: 50000)"));
  if (isNaN(amt)) return 50000;
  return amt;
};

const initialState = {
  amount: getAmount(),
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
