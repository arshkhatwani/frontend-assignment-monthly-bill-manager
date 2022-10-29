import { createSlice } from "@reduxjs/toolkit";
import {
  addBillReducer,
  categoryFilterReducer,
  deleteBillReducer,
  editBillReducer,
} from "../reducers/billsReducers";

export const initialState = {
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
    editBill: editBillReducer,
  },
});

export const { addBill, setCategoryFilter, deleteBill, editBill } =
  billsSlice.actions;

export default billsSlice.reducer;
