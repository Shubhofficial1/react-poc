import React from "react";
import { TextField } from "@mui/material";

const Input = ({ label, value, type, onChange, size = "small", style }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      size={size}
      type={type}
      sx={style}
    ></TextField>
  );
};

export default Input;
