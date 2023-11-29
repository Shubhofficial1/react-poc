import React from "react";
import { CardMedia } from "@mui/material";

const Image = ({ src, alt }) => {
  return (
    <CardMedia
      component="img"
      src={src}
      alt={alt}
      height={"500px"}
      image={src}
    />
  );
};

export default Image;
