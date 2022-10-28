import { Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { setShowModal } from "../../redux/slices/newBillFormSlice";

function AddNewBill() {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(setShowModal(true));
  };

  return (
    <div>
      <Button variant="contained" onClick={onClickHandler}>
        <AddIcon /> Add
      </Button>
    </div>
  );
}

export default AddNewBill;
