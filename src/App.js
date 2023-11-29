import React from "react";
import { Container, CssBaseline } from "@mui/material";
import Button from "./components/Button";
import Image from "./components/Image";
import Link from "./components/Link";

const App = () => {
  const handleButtonClick = () => {
    alert("Submit Button Clicked");
  };

  return (
    <Container component="main">
      <CssBaseline />
      {/* Button Component */}
      <Button label="Submit" onClick={handleButtonClick} />
      {/* Image Component */}
      <Image
        src={
          "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
        alt={"Johnson & Johnson"}
      />
      {/* Link Component */}
      <Link href={"/home"}>Go to home</Link>
    </Container>
  );
};

export default App;
