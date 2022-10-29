import { configureStore } from "@reduxjs/toolkit";
import billsReducer from "./slices/billsSlice";
import editBillReducer from "./slices/editBillSlice";
import newBillFormReducer from "./slices/newBillFormSlice";

export const store = configureStore({
  reducer: {
    newBillForm: newBillFormReducer,
    bills: billsReducer,
    editBill: editBillReducer,
  },
});
