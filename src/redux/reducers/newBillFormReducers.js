import { initialState } from "../slices/newBillFormSlice";

export const showModalReducer = (state, { payload }) => {
  state.showModal = payload;
};

export const formDataReducer = (state, { payload }) => {
  state.formData = { ...state.formData, ...payload };
};

export const clearFormReducer = (state) => {
  state.formData = initialState.formData;
};
