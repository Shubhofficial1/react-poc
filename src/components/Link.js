import React from "react";
import { Link as MuiLink } from "@mui/material";

const Link = ({ href, children }) => {
  return (
    <MuiLink
      gutterBottom
      href={href}
      sx={{
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "14px",
        marginRight: "10px",
      }}
    >
      {children}
    </MuiLink>
  );
};

export default Link;
