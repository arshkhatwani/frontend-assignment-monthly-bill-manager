import getDateDMY from "../../utils/getDateDMY";

export const addBillReducer = (state, { payload }) => {
  let newBill = { ...payload };
  newBill.date = getDateDMY(newBill.date);
  newBill.id = state.bills.length + 1;

  state.categories[newBill.category] = 1;

  state.bills.push(newBill);
};

export const categoryFilterReducer = (state, { payload }) => {
  state.categoryFilter = payload;
};
