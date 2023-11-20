import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import "@fontsource/roboto/400.css";
import { useState, useEffect } from "react";
export default function HeroSection() {
  const [img, setImg] = useState("");

  useEffect(() => {
    getCoverImage();
  }, []);
  const getCoverImage = async () => {
    const req = await fetch("http://localhost:3000/settings", {
      method: "GET",
    });
    const res = await req.json();
    if (res.length > 0) {
      setImg(res[0].coverURL);
    }
  };

  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "yellow", // Adjust text color as needed
    textShadow: "0px 1px 2px black",
  };

  return (
    <Card sx={{ borderRadius: 0, background: "red" }}>
      <Box style={{ position: "relative", maxWidth: "100%" }}>
        <CardMedia
          component="img"
          height="400"
          image={img.length > 0 ? img : "/images/school.jpg"}
          alt="Hero Image"
        />
        <Typography variant="h3" style={textStyle}>
          JamiderHat Begum Nurunnahar High School
        </Typography>
      </Box>
    </Card>
  );
}
