import { createSlice } from "@reduxjs/toolkit";
import {
  addBillReducer,
  categoryFilterReducer,
} from "../reducers/billsReducers";

const initialState = {
  bills: [],
  categoryFilter: "All",
  categories: {},
};

const billsSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    addBill: addBillReducer,
    setCategoryFilter: categoryFilterReducer,
  },
});

export const { addBill, setCategoryFilter } = billsSlice.actions;

export default billsSlice.reducer;
