import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({
  color = "primary",
  variant = "contained",
  size = "medium",
  onClick,
  children,
  style,
}) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      sx={style}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
