import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteBill } from "../../redux/slices/billsSlice";
import { setEditBillId, setShowModal } from "../../redux/slices/editBillSlice";

function ActionBtns(props) {
  const { billId } = props;
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(setEditBillId(billId));
    dispatch(setShowModal(true));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteBill({ billId }));
  };

  return (
    <div>
      <IconButton aria-label="edit" onClick={handleEdit}>
        <EditIcon />
      </IconButton>

      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default ActionBtns;
