import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useState } from "react";

const History_withdraws = () => {
  const [selectedValue, setSelectedValue] = useState("All");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Box>
      <Grid sx={{ mb: 2, mt: 4 }}>
        <Typography sx={{ textAlign: "left", fontSize: "18px" }}>
          Withdraw History
        </Typography>
      </Grid>
      <Grid container spacing={20}>
        <Grid item xs={3}>
          <FormControl>
            <InputLabel>Status</InputLabel>
            <Select
              label="Status"
              value={selectedValue}
              onChange={handleSelectChange}
              sx={{ width: "300px", textAlign: "left" }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="BBBB">BBBB</MenuItem>
              <MenuItem value="CCCC">CCCC</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Start" sx={{ width: "300px" }} />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="End" sx={{ width: "300px" }} />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Box>
  );
};

export default History_withdraws;
