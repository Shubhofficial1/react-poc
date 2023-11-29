import React, { useState } from "react";
import { Container, CssBaseline } from "@mui/material";
import Button from "./components/Button";
import Image from "./components/Image";
import Link from "./components/Link";
import Input from "./components/Input";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [name, setName] = useState("");

  const handleButtonClick = () => {
    alert("Submit Button Clicked");
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      {/* Header Component */}
      <Header />
      <Container component="main">
        <CssBaseline />

        {/* Image Component */}
        <Image
          src={
            "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800"
          }
          alt={"Johnson & Johnson"}
        />
        <br />

        {/* Button Component */}
        <Button label="Submit" onClick={handleButtonClick} />
        <br />

        {/* Link Component */}
        <Link href={"/home"}>Go to home</Link>
        <br />

        {/* Input Component */}
        <Input label="Name" value={name} onChange={handleInputChange} />
      </Container>
      <Footer />
    </>
  );
};

export default App;
