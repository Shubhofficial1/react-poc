import React from "react";
import { TextField } from "@mui/material";

const Input = ({ label, value, onChange }) => {
  return (
    <TextField label={label} value={value} onChange={onChange}></TextField>
  );
};

export default Input;
