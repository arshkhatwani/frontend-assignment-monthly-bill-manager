export const modalReducer = (state, { payload }) => {
  state.showModal = payload;
};

export const formDataReducer = (state, { payload }) => {
  state.formData = { ...state.formData, ...payload };
};

export const editBillIdReducer = (state, { payload }) => {
  state.editBillId = payload;
};
