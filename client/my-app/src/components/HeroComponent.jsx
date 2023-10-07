import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function HeroSection() {
  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "yellow", // Adjust text color as needed
    textShadow: "0px 1px 2px black",
  };

  return (
    <Card style={{ borderRadius: 0 }}>
      <Box style={{ position: "relative", backgroundColor: "rgba(0,0,0,0.5)" }}>
        <CardMedia
          component="img"
          height="400"
          image="/images/school.jpg"
          alt="Hero Image"
        />
        <Typography variant="h3" style={textStyle}>
          ZamiderHat Begum Nurunnahar High School
        </Typography>
      </Box>
    </Card>
  );
}
