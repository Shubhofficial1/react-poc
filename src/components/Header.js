import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = ({ text }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">{text}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
