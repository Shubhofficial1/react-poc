import React from "react";
import { Typography } from "@mui/material";

const Eyebrow = ({ variant, children }) => {
  return <Typography variant={variant}>{children}</Typography>;
};

export default Eyebrow;
