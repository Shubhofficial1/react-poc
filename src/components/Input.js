import React from "react";
import { TextField } from "@mui/material";

const Input = ({ label, value, onChange, size = "small" }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      size={size}
    ></TextField>
  );
};

export default Input;
