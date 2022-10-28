import { Typography } from "@mui/material";
import React from "react";
import AddNewBill from "./AddNewBill";

function BillsBar() {
  return (
    <div className="flex flex-row justify-around items-center py-2 mb-8">
      <Typography variant="h5">Bills</Typography>

      <AddNewBill />
    </div>
  );
}

export default BillsBar;
