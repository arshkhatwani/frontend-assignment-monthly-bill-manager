import { createSlice } from "@reduxjs/toolkit";
import {
  clearFormReducer,
  formDataReducer,
  showModalReducer,
} from "../reducers/newBillFormReducers";

export const initialState = {
  showModal: false,
  formData: { description: "", category: "", date: "", amount: 0 },
};

const newBillFormSlice = createSlice({
  name: "newBillForm",
  initialState,
  reducers: {
    setShowModal: showModalReducer,
    setFormData: formDataReducer,
    clearFormData: clearFormReducer,
  },
});

export const { setShowModal, setFormData, clearFormData } =
  newBillFormSlice.actions;

export default newBillFormSlice.reducer;
