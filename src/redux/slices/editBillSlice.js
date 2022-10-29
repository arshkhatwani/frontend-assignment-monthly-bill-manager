import { createSlice } from "@reduxjs/toolkit";
import { editBillIdReducer, modalReducer } from "../reducers/editBillReducers";
import { formDataReducer } from "../reducers/editBillReducers";

const initialState = {
  showModal: false,
  formData: { description: "", category: "", date: "", amount: 0 },
  editBillId: -1,
};

const editBillSlice = createSlice({
  name: "editBill",
  initialState,
  reducers: {
    setShowModal: modalReducer,
    setFormData: formDataReducer,
    setEditBillId: editBillIdReducer,
  },
});

export const { setShowModal, setFormData, setEditBillId } =
  editBillSlice.actions;

export default editBillSlice.reducer;
