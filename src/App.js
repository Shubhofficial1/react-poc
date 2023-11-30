import React, { useState } from "react";
import { Container, CssBaseline } from "@mui/material";
import Button from "./components/Button";
import Image from "./components/Image";
import Link from "./components/Link";
import Input from "./components/Input";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Typography from "./components/Typography";
import Headline from "./components/Headline";
import Body from "./components/Body";
import Eyebrow from "./components/Eyebrow";
import Card from "./components/Card";
import Form from "./components/Form";

const App = () => {
  const [name, setName] = useState("");

  const handleButtonClick = () => {
    alert("Submit Button Clicked");
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleReadMore = () => {
    alert("Read More Button clicked");
  };

  return (
    <>
      {/* Body Component */}
      <Body>
        {/* Header Component */}
        <Header />
        <Container component="main">
          <CssBaseline />

          {/* Image Component */}
          <Image
            src={
              "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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

          {/* Typography Component */}
          <Typography variant={"h6"}>Hello</Typography>

          {/* Headline Component */}
          <Headline text="Sample Headline"></Headline>

          {/* Eyebrow Component */}
          <Eyebrow>Subtitle</Eyebrow>

          {/* Card Component */}
          <Card
            image="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="test"
            headline="This is a test headline"
            body="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            onClick={handleReadMore}
          />
          <br />

          {/* Form Component */}
          <Form />
        </Container>

        {/* Footer Component */}
        <Footer
          text={"&copy; 2020-2023. All rights reserved 🚀"}
          variant="subtitle1"
        />
      </Body>
    </>
  );
};

export default App;
