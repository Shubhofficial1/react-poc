import React from "react";
import { Container, CssBaseline } from "@mui/material";
import Button from "./components/Button";

const App = () => {
  const handleButtonClick = () => {
    alert("Submit Button Clicked");
  };

  return (
    <Container component="main">
      <CssBaseline />
      {/* Button Component */}
      <Button label="Submit" onClick={handleButtonClick} />
    </Container>
  );
};

export default App;
