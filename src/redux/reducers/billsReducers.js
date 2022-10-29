import getDateDMY from "../../utils/getDateDMY";
import { initialState } from "../slices/billsSlice";

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
  let newId = 1;

  state.bills.forEach((item) => {
    newCategories[item.category] = 1;
    item.id = newId;
    newId += 1;
  });

  state.categories = newCategories;
  state.categoryFilter = initialState.categoryFilter;
};

export const categoryFilterReducer = (state, { payload }) => {
  state.categoryFilter = payload;
};

export const editBillReducer = (state, { payload }) => {
  let newBill = { ...payload };
  newBill.date = getDateDMY(newBill.date);

  let idx = state.bills.findIndex((e) => e.id === newBill.id);
  state.bills[idx] = newBill;

  let newCategories = {};
  state.bills.forEach((item) => (newCategories[item.category] = 1));
  state.categories = newCategories;

  state.categoryFilter = initialState.categoryFilter;
};
