import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = ({ text }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#0E1A2A",
      }}
    >
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          {text}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
