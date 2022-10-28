import { Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

function AddNewBill() {
  return (
    <div>
      <Button variant="contained">
        <AddIcon /> Add
      </Button>
    </div>
  );
}

export default AddNewBill;
