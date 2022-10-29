import { MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryFilter } from "../../redux/slices/billsSlice";

function CategoryFilter() {
  const dispatch = useDispatch();

  const { categoryFilter, categories, bills } = useSelector(
    (store) => store.bills
  );

  const handleChange = (e) => {
    dispatch(setCategoryFilter(e.target.value));
  };

  if (bills.length === 0) return <></>;

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="mr-4">
        <Typography>Filter by category</Typography>
      </div>

      <Select
        inputProps={{ "aria-label": "Without label" }}
        value={categoryFilter}
        onChange={handleChange}
      >
        <MenuItem value={"All"}>All</MenuItem>

        {Object.keys(categories).map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default CategoryFilter;
