import { Card, Grid, Typography } from "@mui/material";
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
      <Grid container  >
        <Grid container xs={12}>
          <Typography sx={{ textAlign: "left", fontSize: "2rem" }}>
            Withdraw
          </Typography>
        </Grid>
        <Grid xs={3}>
          <CardItem title={withdrawData.title} total={withdrawData.total} />
        </Grid>
        <Grid xs={12}>
        <Card sx={{p:2,mt:2}}>
          <History_withdraws />
          </Card>
        </Grid>
        <Grid xs={12} sx={{ mb: 2, mt: 2 }}>
          <Card sx={{p:2}}>
          <Table_withdraws />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Withdraws;
