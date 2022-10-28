export const showModalReducer = (state, { payload }) => {
  state.showModal = payload;
};

export const formDataReducer = (state, { payload }) => {
  state.formData = { ...state.formData, ...payload };
};
