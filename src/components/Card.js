import React from "react";
import { Card as MuiCard, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const Card = ({ image, alt, headline, body, onClick }) => {
  return (
    <MuiCard sx={{ maxWidth: "350px" }}>
      <CardMedia sx={{ height: 140 }} image={image} title={alt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {headline}
        </Typography>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClick}>
          Read More
        </Button>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
