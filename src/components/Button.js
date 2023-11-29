import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ label, color = "primary", size = "medium", onClick }) => {
  return (
    <MuiButton variant="contained" color={color} size={size} onClick={onClick}>
      {label}
    </MuiButton>
  );
};

export default Button;
