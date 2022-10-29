import { IconButton, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { setAmount } from "../../redux/slices/amountSlice";

function AmountComp() {
  const dispatch = useDispatch();
  const { amount } = useSelector((store) => store.amount);

  return (
    <div className="flex flex-row items-center">
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Monthly Budget : {amount}
      </Typography>

      <IconButton
        style={{ color: "white" }}
        onClick={() => {
          const newAmount = prompt("Enter amount in number");
          if (isNaN(newAmount)) return;
          dispatch(setAmount(newAmount));
        }}
      >
        <EditIcon />
      </IconButton>
    </div>
  );
}

export default AmountComp;
