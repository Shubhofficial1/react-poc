import React from "react";
import { Link as MuiLink } from "@mui/material";

const Link = ({ href, children }) => {
  return <MuiLink href={href}>{children}</MuiLink>;
};

export default Link;
