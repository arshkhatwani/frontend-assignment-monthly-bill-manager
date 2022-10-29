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

const compare = (a, b) => {
  if (a.amount < b.amount) {
    return 1;
  }
  if (a.amount > b.amount) {
    return -1;
  }
  return 0;
};

export const highlightReducer = (state, { payload }) => {
  const { amount } = payload;
  let newBills = [...state.bills];
  let highlightIds = [];

  newBills.sort(compare);

  let curAmount = 0;
  for (var i = 0; i < newBills.length; i++) {
    if (curAmount + newBills[i].amount > amount && highlightIds.length != 0)
      break;
    if (highlightIds.length === 1) break;

    if (curAmount + newBills[i].amount > amount) continue;

    curAmount += newBills[i].amount;
    highlightIds.push(newBills[i].id);
  }

  state.highlightIds = highlightIds;
};
