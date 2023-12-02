import React from "react";
import { CardMedia } from "@mui/material";

const Image = ({ src, alt, height = "300px" }) => {
  return <CardMedia component="img" src={src} alt={alt} height={height} />;
};

export default Image;
