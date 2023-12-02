import React from "react";
import { AppBar, Toolbar } from "@mui/material";

const Header = ({ children }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#0E1A2A",
      }}
    >
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

export default Header;
