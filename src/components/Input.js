import React from "react";
import { TextField } from "@mui/material";

const Input = ({ label, value, onChange, size = "small" }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      size={size}
      sx={{
        backgroundColor: "#0E1A2A",
        color: "#fff",
        borderRadius: "5px",
        width: "300px",
        "& input": { color: "#fff" },
        "& label": { color: "#fff" },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "transparent",
          },
          "&:hover fieldset": {
            borderColor: "transparent",
          },
          "&.Mui-focused fieldset": {
            borderColor: "transparent",
            boxShadow: "none",
          },
        },
      }}
    ></TextField>
  );
};

export default Input;
