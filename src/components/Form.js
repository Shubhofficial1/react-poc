import React from "react";
import { TextField, Button } from "@mui/material";

const Form = ({
  username,
  password,
  onNameChange,
  onPasswordChange,
  onSubmit,
}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`UserName : ${username} `);
    console.log(`Password : ${password} `);
    if (onSubmit) {
      onSubmit();
    }
  };
  return (
    <form>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        size="large"
        onChange={onNameChange}
        sx={{
          backgroundColor: "#0E1A2A",
          color: "#fff",
          borderRadius: "5px",
          width: "300px",
          marginRight: "20px",
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
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        size="large"
        onChange={onPasswordChange}
        sx={{
          backgroundColor: "#0E1A2A",
          color: "#fff",
          borderRadius: "5px",
          width: "300px",
          marginRight: "20px",
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
      />

      <Button
        // disabled={!username || !password}
        variant="contained"
        color="primary"
        onClick={handleFormSubmit}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
