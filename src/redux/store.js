import { configureStore } from "@reduxjs/toolkit";
import billsReducer from "./slices/billsSlice";
import newBillFormReducer from "./slices/newBillFormSlice";

export const store = configureStore({
  reducer: {
    newBillForm: newBillFormReducer,
    bills: billsReducer,
  },
});
