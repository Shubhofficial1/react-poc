import React from "react";
import { Paper } from "@mui/material";

const Body = ({ children }) => {
  return (
    <Paper sx={{ padding: "10px" }} elevation={3}>
      {children}
    </Paper>
  );
};

export default Body;
