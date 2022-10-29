import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, setShowModal } from "../../redux/slices/editBillSlice";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { editBill } from "../../redux/slices/billsSlice";
import getDateYMD from "../../utils/getDateYMD";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function EditBill() {
  const dispatch = useDispatch();
  const { showModal, formData, editBillId } = useSelector(
    (store) => store.editBill
  );
  const { description, category, date, amount } = formData;
  let billData = useSelector((store) => store.bills).bills.find(
    (e) => e.id === editBillId
  );

  const handleClose = () => {
    dispatch(setShowModal(false));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(editBill(formData));
    handleClose();
  };

  useEffect(() => {
    if (!showModal) return;

    const date = getDateYMD(billData.date);
    const newFormData = { ...billData, date };

    dispatch(setFormData(newFormData));

    // eslint-disable-next-line
  }, [showModal, editBillId]);

  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="mb-7">
          <Typography variant="h4" align="center">
            Edit Bill
          </Typography>
        </div>

        <form onSubmit={onSubmitHandler}>
          <div className="flex flex-col w-full ">
            <div className="mb-7">
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                fullWidth={true}
                required
                value={description}
                onChange={(e) => {
                  dispatch(setFormData({ description: e.target.value }));
                }}
              />
            </div>

            <div className="mb-7">
              <TextField
                id="outlined-basic"
                label="Category"
                variant="outlined"
                fullWidth={true}
                required
                value={category}
                onChange={(e) => {
                  dispatch(setFormData({ category: e.target.value }));
                }}
              />
            </div>

            <div className="mb-7">
              <TextField
                id="outlined-basic"
                label="Amount"
                variant="outlined"
                type="number"
                fullWidth={true}
                required
                value={amount}
                onChange={(e) => {
                  let val = !isNaN(e.target.valueAsNumber)
                    ? e.target.valueAsNumber
                    : 0;

                  dispatch(
                    setFormData({
                      amount: val,
                    })
                  );
                }}
              />
            </div>

            <div className="mb-7">
              <TextField
                id="outlined-basic"
                label="Date"
                variant="outlined"
                type="date"
                fullWidth={true}
                required
                value={date}
                onChange={(e) => {
                  dispatch(setFormData({ date: e.target.value }));
                }}
              />
            </div>
          </div>

          <div>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
}

export default EditBill;
