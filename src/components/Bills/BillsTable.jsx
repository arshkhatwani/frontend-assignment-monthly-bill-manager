import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import ActionBtns from "./ActionBtns";

export default function BillsTable() {
  const { bills, categoryFilter } = useSelector((store) => store.bills);
  const [showBills, setShowBills] = useState(bills);

  useEffect(() => {
    console.log(categoryFilter);
    if (categoryFilter === "All") {
      setShowBills(bills);
      return;
    }

    setShowBills(bills.filter((e) => e.category === categoryFilter));
  }, [categoryFilter, bills]);

  if (bills.length === 0) {
    return (
      <Typography variant="h6" align="center">
        No bills available
      </Typography>
    );
  }

  return (
    <div className="mx-auto w-3/5">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {showBills.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">
                  <ActionBtns billId={row.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
