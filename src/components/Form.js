import React from "react";
import { Box } from "@mui/material";
import Input from "../components/Input";
import Button from "../components/Button";

const Form = ({
  username,
  password,
  onNameChange,
  onPasswordChange,
  onSubmit,
}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <form
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"500px"}
      >
        <Input
          label="Username"
          value={username}
          size="large"
          onChange={onNameChange}
          style={{
            backgroundColor: "#0E1A2A",
            color: "#fff",
            borderRadius: "5px",
            width: "100%",
            marginBottom: "10px",
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

        <Input
          label="Password"
          type="password"
          value={password}
          size="large"
          onChange={onPasswordChange}
          style={{
            backgroundColor: "#0E1A2A",
            color: "#fff",
            borderRadius: "5px",
            width: "100%",
            marginBottom: "10px",
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
          variant="contained"
          color="primary"
          onClick={handleFormSubmit}
          style={{ width: "100%" }}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default Form;
