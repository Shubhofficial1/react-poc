import React from "react";
import { Typography as MuiTypography } from "@mui/material";

const Typography = ({ variant, children, style, className }) => {
  return (
    <MuiTypography variant={variant} sx={style} className={className}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
