import React, { useState } from "react";
import { Container, CssBaseline, Box, Grid, Stack } from "@mui/material";
import Body from "../components/Body";
import Header from "../components/Header";
import Typography from "../components/Typography";
import Button from "../components/Button";
import Card from "../components/Card";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { Trips } from "../data/trips";
import { Links } from "../data/links";
import Link from "../components/Link";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Body>
        {/* Header Component */}
        <Header>
          <Typography
            variant={"h4"}
            style={{
              fontFamily: "'Ephesis', cursive !important",
              fontWeight: "500",
            }}
          >
            Travo
          </Typography>
        </Header>
        <Container maxWidth="xl" component="main" flexGrow="1">
          <CssBaseline />

          {/* Hero Section */}
          <Box
            sx={{
              minHeight: "700px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* Headline Component */}
            <Typography
              variant={"h2"}
              style={{
                fontWeight: "bold",
                background:
                  "linear-gradient(90deg, #4694dc 12.29%, #4abcd5 50%), #ffffff",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className={"heading"}
            >
              Explore Your Next Adventure Now
            </Typography>
            <Box
              sx={{
                marginTop: "40px",
                maxWidth: "650px",
                textAlign: "center",
              }}
            >
              {/* Body Component */}
              <Typography variant={"body1"} style={{ fontWeight: "500" }}>
                Discover the world's wonders with our curated travel
                experiences, turning your wanderlust into extraordinary
                adventures.
              </Typography>
            </Box>

            <Box sx={{ marginTop: "40px" }}>
              <Button size="large" className={"cta"}>
                Explore
              </Button>
            </Box>
          </Box>

          {/* Trip Listing */}
          <Box>
            <Box
              sx={{
                margin: "10px 0px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography variant={"h6"} style={{ fontWeight: "600" }}>
                Plan Your Next Trip
              </Typography>
              <Button variant="text" size="small">
                View All
              </Button>
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 12 }}
            >
              {Trips?.map((trip) => (
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={3}
                  key={trip._id}
                  sx={{ margin: "20px 0px" }}
                >
                  <Card
                    src={trip.src}
                    alt={trip.alt}
                    headline={trip.headline}
                    body={trip.body}
                    location={trip.location}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Trending Places */}
          <Box>
            <Typography
              variant={"h6"}
              style={{ fontWeight: "600", margin: "20px 0px" }}
            >
              Trending now
            </Typography>
            <Stack direction={"row"} spacing={2}>
              <Card
                src={
                  "https://images.pexels.com/photos/2707756/pexels-photo-2707756.jpeg?auto=compress&cs=tinysrgb&w=1200"
                }
                alt="Soothing Bali Beaches"
                headline="Soothing Bali Beaches"
                location={"Indonesia"}
                body="Relax on the pristine beaches of Bali, where turquoise waters meet golden sands, and the gentle rustle of palm trees provides a serene soundtrack to your tropical escape.Relax on the pristine beaches of Bali, where turquoise waters meet golden sands, and the gentle rustle of palm trees provides a serene soundtrack to your tropical escape.
              Relax on the pristine beaches of Bali, where turquoise waters meet golden sands, and the gentle rustle of palm trees provides a serene soundtrack to your tropical escape.
              "
              />

              <Card
                src={
                  "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=1200"
                }
                alt="Enchanting Venice Canals"
                headline="Enchanting Venice Canals"
                location={"Italy"}
                body="Embark on a gondola journey through Venice's winding canals, where historic architecture reflects on tranquil waters, and every bridge holds a story of timeless romance.Embark on a gondola journey through Venice's winding canals, where historic architecture reflects on tranquil waters, and every bridge holds a story of timeless romance.Embark on a gondola journey through Venice's winding canals, where historic architecture reflects on tranquil waters, and every bridge holds a story of timeless romance.
              "
              />
            </Stack>
          </Box>

          {/* Form Section */}
          <Box>
            <Box>
              <Typography
                variant={"h6"}
                style={{ fontWeight: "500", margin: "20px 0px" }}
              >
                Subscribe to our newsletter
              </Typography>
            </Box>
            <Box margin={"20px 0px"}>
              <Form
                username={username}
                password={password}
                onNameChange={handleUsernameChange}
                onPasswordChange={handlePasswordChange}
                onSubmit={() => {
                  alert(`Form Submitted : ${username} | ${password} `);
                }}
              />
            </Box>
          </Box>
        </Container>

        {/* Footer Section */}
        <Footer variant="subtitle1">
          <Box
            display={"flex"}
            flexDirection={"row"}
            marginBottom={"10px"}
            flexWrap
          >
            {Links?.map((link) => (
              <Link key={link._id} href={link.href}>
                {link.name}
                {"    |    "}
              </Link>
            ))}
          </Box>
          <Typography variant={"caption"}>
            &copy; 2020-23 All Rights Reserved 🚀
          </Typography>
        </Footer>
      </Body>
    </>
  );
};

export default Home;
