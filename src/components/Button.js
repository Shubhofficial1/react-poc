import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({label,onClick}) => {
  return (
    <MuiButton variant="contained" color="primary" onClick={onClick}>
      {label}
    </MuiButton>
  );
};

export default Button;
