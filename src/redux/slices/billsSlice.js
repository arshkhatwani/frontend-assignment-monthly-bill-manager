import { createSlice } from "@reduxjs/toolkit";
import { addBillReducer } from "../reducers/billsReducers";

const initialState = {
  bills: [],
};

const billsSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    addBill: addBillReducer,
  },
});

export const { addBill } = billsSlice.actions;

export default billsSlice.reducer;
