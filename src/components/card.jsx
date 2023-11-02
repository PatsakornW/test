import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Box } from "@mui/material";

const CardItem = ({ title, total }) => {
  return (
<Card>
  <CardContent sx={{ display: "flex", flexDirection: "column" }}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
      }}
    >
      <Typography sx={{ mb: 1.5, color: "gray", fontSize: '18px' }}>{title}</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ textAlign: "left", fontSize: '28px', fontWeight: '700' }}>{total}</Typography>
        <MonetizationOnIcon color="primary" sx={{fontSize:'34px'}} />
      </Box>
    </Box>
  </CardContent>
</Card>

  
  
  );
};

export default CardItem;
