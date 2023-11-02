import {
    Box,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
  import { DatePicker } from "@mui/x-date-pickers/DatePicker";
  import React from "react";
  
  const History_deposit = () => {
    return (
      <Box>
        <Grid sx={{ mb: 2, mt: 2 }}>
          <Typography sx={{ textAlign: "left", fontSize: "24px" }}>
            Deposits History
          </Typography>
        </Grid>
        <Grid  xs={12} spacing={20} container>
          <Grid item xs={3}>
            <TextField label="Search" sx={{ width: "300px" }} />
          </Grid>
          <Grid item xs={3}>
            <FormControl sx={{ width: "100%" }}>
            <InputLabel>Status</InputLabel>

              <Select label="Status" sx={{ width: "300px" }}>
                <MenuItem>AAAA</MenuItem>
                <MenuItem>BBBB</MenuItem>
                <MenuItem>CCCC</MenuItem>
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
  
  export default History_deposit;
  