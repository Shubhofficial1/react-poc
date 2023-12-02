import React from "react";
import { Typography as MuiTypography } from "@mui/material";

const Typography = ({ variant, children, style }) => {
  return (
    <MuiTypography variant={variant} sx={style}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
