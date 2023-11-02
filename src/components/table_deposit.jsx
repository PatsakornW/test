import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const CustomButton = styled(Button)`
  background-color: #cea726;
  &:hover {
    background-color: #cea800;
  }
`;
const columns = [
  { field: "time", headerName: "Time", width: 180,   },
  { field: "merchant", headerName: "Merchant TX Id", width: 180, },
  { field: "tx_id", headerName: "System TX Id", width: 180 },
  { field: "amount", headerName: "Amount" },
  { field: "amount_fee", headerName: "Amount (+Fee)", width: 150 },
  { field: "fee", headerName: "Fee" },
  { field: "prev_balance", headerName: "Prev Balance", width: 120 },
  { field: "new_balance", headerName: "New Balance", width: 120 },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params) => {
      return (
        <CustomButton
          sx={{fontSize:'10px',borderRadius:'20px'}}
          variant="contained"
          startIcon={<AccessTimeIcon />}
        >
          {params.value}
        </CustomButton>
      );
    },
  },
];

const data = [
  {
    id: 1,
    time: "06/Oct/2023 23:12:44",
    merchant: "AAA",
    tx_id: "aqwed64",
    amount: 100.0,
    amount_fee: 98.39,
    fee: 1.5,
    prev_balance: 0,
    new_balance: 0,
    status: "Pending",
  },
  {
    id: 2,
    time: "06/Oct/2023 23:07:50",
    merchant: "BBB",
    tx_id: "aqwed64eqweq",
    amount: 200.0,
    amount_fee: 196.79,
    fee: 1.5,
    prev_balance: 0,
    new_balance: 0,
    status: "Pending",
  },
];

const Table_deposit = () => {
  return (
    <div sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}

      />
    </div>
  );
};

export default Table_deposit;
