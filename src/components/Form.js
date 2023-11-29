import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Form submit logic to be written here
    console.log(`UserName : ${username} `);
    console.log(`Password : ${password} `);
  };
  return (
    <form>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={handleFormSubmit}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
