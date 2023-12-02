import React from "react";
import { Card as MuiCard } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "../components/Image";

const Card = ({ image, alt, headline, body, onClick }) => {
  return (
    <MuiCard
      sx={{
        backgroundColor: "#0F1A2A",
      }}
    >
      {/* Custom Image Component */}
      <Image src={image} alt={alt} height={"160px"} />
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
        <Button size="small" onClick={onClick}>
          Read More
        </Button>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
