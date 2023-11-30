import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = ({ text, variant = "subtitle1" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant={variant}>&copy; {text}</Typography>
    </Box>
  );
};

export default Footer;
