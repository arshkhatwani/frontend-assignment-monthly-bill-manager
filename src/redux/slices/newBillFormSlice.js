import { createSlice } from "@reduxjs/toolkit";
import {
  formDataReducer,
  showModalReducer,
} from "../reducers/newBillFormReducers";

const initialState = {
  showModal: false,
  formData: { description: "", category: "", date: "", amount: 0 },
};

const newBillFormSlice = createSlice({
  name: "newBillForm",
  initialState,
  reducers: {
    setShowModal: showModalReducer,
    setFormData: formDataReducer,
  },
});

export const { setShowModal, setFormData } = newBillFormSlice.actions;

export default newBillFormSlice.reducer;
