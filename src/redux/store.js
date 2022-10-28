import { configureStore } from "@reduxjs/toolkit";
import newBillFormReducer from "./slices/newBillFormSlice";

export const store = configureStore({
  reducer: {
    newBillForm: newBillFormReducer,
  },
});
