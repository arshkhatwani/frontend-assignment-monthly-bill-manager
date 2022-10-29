import getDateDMY from "../../utils/getDateDMY";

export const addBillReducer = (state, { payload }) => {
  let newBill = { ...payload };
  newBill.date = getDateDMY(newBill.date);
  newBill.id = state.bills.length + 1;

  state.categories[newBill.category] = 1;

  state.bills.push(newBill);
};

export const deleteBillReducer = (state, { payload }) => {
  const { billId } = payload;
  state.bills = state.bills.filter((e) => e.id !== billId);

  let newCategories = {};
  state.bills.forEach((item) => (newCategories[item.category] = 1));
  state.categories = newCategories;
};

export const categoryFilterReducer = (state, { payload }) => {
  state.categoryFilter = payload;
};
