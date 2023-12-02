import React from "react";
import { Box } from "@mui/material";

const Footer = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#02213D",
        padding: "30px 0px",
        marginTop: "auto",
      }}
    >
      {children}
    </Box>
  );
};

export default Footer;
