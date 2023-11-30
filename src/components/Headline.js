import React from "react";
import { Typography } from "@mui/material";

const Headline = ({ text, variant = "h1" }) => {
  return <Typography variant={variant}>{text}</Typography>;
};

export default Headline;
