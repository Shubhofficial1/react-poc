import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({
  color = "primary",
  variant = "contained",
  size = "medium",
  onClick,
  children,
  style,
  className,
}) => {
  const buttonStyle = {
    textTransform: "none",
    ...style,
  };
  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      sx={buttonStyle}
      className={className}
      data-testid="button"
    >
      {children}
    </MuiButton>
  );
};

export default Button;
