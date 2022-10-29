import { createSlice } from "@reduxjs/toolkit";
import {
  addBillReducer,
  categoryFilterReducer,
  deleteBillReducer,
  editBillReducer,
  highlightReducer,
} from "../reducers/billsReducers";

export const initialState = {
  bills: [],
  categoryFilter: "All",
  categories: {},
  highlightIds: [],
};

const billsSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    addBill: addBillReducer,
    setCategoryFilter: categoryFilterReducer,
    deleteBill: deleteBillReducer,
    editBill: editBillReducer,
    getHightlightIds: highlightReducer,
  },
});

export const {
  addBill,
  setCategoryFilter,
  deleteBill,
  editBill,
  getHightlightIds,
} = billsSlice.actions;

export default billsSlice.reducer;
