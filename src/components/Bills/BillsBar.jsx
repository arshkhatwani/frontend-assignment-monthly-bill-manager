import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import AddNewBill from "./AddNewBill";
import CategoryFilter from "./CategoryFilter";

function BillsBar() {
  const { bills } = useSelector((store) => store.bills);
  let sum = 0;
  bills.forEach((e) => (sum += e.amount));

  return (
    <>
      <div className="flex flex-row justify-around items-center py-2 mb-8">
        <Typography variant="h5">Bills</Typography>

        <AddNewBill />
      </div>

      <div className="flex flex-row justify-around items-center py-2 mb-8">
        <CategoryFilter />

        <div>
          Total amount: <b>{sum}</b>
        </div>
      </div>
    </>
  );
}

export default BillsBar;
