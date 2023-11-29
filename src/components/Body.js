import React from "react";
import { Paper } from "@mui/material";

const Body = ({ children }) => {
  return <Paper elevation={3}>{children}</Paper>;
};

export default Body;
