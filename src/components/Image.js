import React from "react";
import { CardMedia } from "@mui/material";

const Image = ({ src, alt }) => {
  return <CardMedia component="img" src={src} alt={alt} image={src} />;
};

export default Image;
