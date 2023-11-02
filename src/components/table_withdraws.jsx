import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  { field: "time", headerName: "Time", width: 180 },
  { field: "client", headerName: "Merchant TX Id", width: 180 },
  { field: "bank", headerName: "System TX Id", width: 180 },
  { field: "amount", headerName: "Amount" },
  { field: "amount_fee", headerName: "Amount With Fee", width: 150 },
  { field: "fee", headerName: "Fee" },
  { field: "prev_balance", headerName: "Prev Balance", width: 120 },
  { field: "new_balance", headerName: "New Balance", width: 120 },
  { field: "status", headerName: "Status" },
];



const Table_withdraws = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={0}
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

export default Table_withdraws;
