import React from "react";
import { Typography } from "@mui/material";

const Headline = ({ children, variant = "h1", style }) => {
  return (
    <Typography
      sx={{
        fontWeight: "bold",
        background:
          "linear-gradient(90deg, #4694dc 12.29%, #4abcd5 50%), #ffffff",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
      variant={variant}
      {...style}
    >
      {children}
    </Typography>
  );
};

export default Headline;
