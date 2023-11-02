import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Card, TextField, Typography, styled } from "@mui/material";
import CardItem from "../components/card";
import Table_deposit from "../components/table_deposit";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import History_deposit from "../components/history_deposit";
import { red } from "@mui/material/colors";

const Deposits = () => {
  const [titleDeposit, setTitleDeposit] = useState([
    {
      title: "Deposit Balance",
      total: 0,
    },
    {
      title: "Total Deposits",
      total: 98.395,
    },
    {
      title: "Today Deposit",
      total: 0,
    },
    {
      title: "Pending Deposit",
      total: 295.185,
    },
  ]);

  const CustomButton = styled(Button)`
    background-color: #2c0031;
    &:hover {
      background-color: #5c0040;
    }
  `;

  return (
    <div>
      <Grid container spacing={2}>
        <Grid container alignItems="center" xs={12}>
          <Typography sx={{ textAlign: "left", fontSize: "2rem" }}>
            Deposits
          </Typography>
          <CustomButton sx={{ marginLeft: "auto" }} variant="contained" startIcon={<ImportExportIcon/>}>Export</CustomButton>
        </Grid>


        {titleDeposit.map((item, i) => (
          <Grid xs={3} key={i} >
            <CardItem title={item.title} total={item.total} />
          </Grid>
        ))}

        <Grid xs={12}>
          <Card sx={{p:2}}>
          <Grid container alignItems="center" xs={12} sx={{ mb: 2, mt: 4 }}>
            <Typography sx={{ textAlign: "left", fontSize: "24px" }}>
              Deposits Pending
            </Typography>
            <TextField label="Search" sx={{ marginLeft: "auto" }} />
          </Grid>
          <Grid xs={12}>
            <Table_deposit />
          </Grid>
          </Card>
         
        </Grid>

        <Grid  xs={12}>
          <Card sx={{p:2}}>
          <History_deposit />

          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Deposits;
