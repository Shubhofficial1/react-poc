import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({
  label,
  color = "primary",
  variant = "contained",
  size = "medium",
  onClick,
}) => {
  return (
    <MuiButton variant={variant} color={color} size={size} onClick={onClick}>
      {label}
    </MuiButton>
  );
};

export default Button;
