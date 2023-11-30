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
      onSubmit({ username, password });
    }
  };
  return (
    <form>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        size="small"
        onChange={onNameChange}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        size="small"
        onChange={onPasswordChange}
      />

      <Button variant="contained" color="primary" onClick={handleFormSubmit}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
