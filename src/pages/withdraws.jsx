import { Grid, Typography } from "@mui/material";
import React from "react";
import CardItem from "../components/card";
import History_withdraws from "../components/history_withdraws";
import Table_withdraws from "../components/table_withdraws";

const Withdraws = () => {
  const withdrawData = {
    title: "Withdraw Available",
    total: 98.395,
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Typography sx={{ textAlign: "left", fontSize: "2rem" }}>
            Withdraw
          </Typography>
        </Grid>
        <Grid xs={3}>
          <CardItem title={withdrawData.title} total={withdrawData.total} />
        </Grid>
        <Grid xs={12}>
          <History_withdraws />
        </Grid>
        <Grid xs={12} sx={{ mb: 2, mt: 4 }}>
          <Table_withdraws />
        </Grid>
      </Grid>
    </div>
  );
};

export default Withdraws;
