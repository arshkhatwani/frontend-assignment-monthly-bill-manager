import { createSlice } from "@reduxjs/toolkit";
import {
  addBillReducer,
  categoryFilterReducer,
  deleteBillReducer,
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
    deleteBill: deleteBillReducer,
  },
});

export const { addBill, setCategoryFilter, deleteBill } = billsSlice.actions;

export default billsSlice.reducer;
