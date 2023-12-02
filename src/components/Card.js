import React from "react";
import { Card as MuiCard } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "../components/Typography";
import Image from "../components/Image";
import Link from "../components/Link";
import { generateHrefFromHeadline } from "../utils/generateHrefFromHeadline";

const Card = ({ src, alt, headline, body, location }) => {
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
        {/* Headline Component */}
        <Typography
          variant={"h6"}
          style={{
            textTransform: "capitalize",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            marginBottom: "10px",
            color: "white",
          }}
        >
          {headline}
        </Typography>
        {/* Body component*/}
        <Typography
          variant="body2"
          style={{
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
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Eyebrow component*/}
        <Typography
          variant="subtitle1"
          style={{
            width: "fit-content",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "600",
            textTransform: "capitalize",
            margin: "0px 10px",
            backgroundColor: "transparent",
            color: "#a6cfd5",
          }}
        >
          {location}
        </Typography>

        {/* CTA Link Component */}
        <Link href={`/places${href}`}>Read More</Link>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
