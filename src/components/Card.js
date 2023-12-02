import React from "react";
import { Card as MuiCard } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Image from "../components/Image";
import Link from "../components/Link";
import { generateHrefFromHeadline } from "../utils/generateHrefFromHeadline";

const Card = ({ src, alt, headline, body }) => {
  const href = generateHrefFromHeadline(headline);

  return (
    <MuiCard
      sx={{
        backgroundColor: "#0F1A2A",
      }}
    >
      {/* Custom Image Component */}
      <Image src={src} alt={alt} height={"160px"} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            textTransform: "capitalize",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
            WebkitLineClamp: 1,
          }}
        >
          {headline}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            color: "#a1a1a1",
          }}
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        {/* Link Component */}
        <Link href={`/places${href}`}>Read More</Link>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
