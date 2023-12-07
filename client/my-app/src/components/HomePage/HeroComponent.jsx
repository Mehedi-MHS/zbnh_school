import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import "@fontsource/roboto/400.css";
import { useState, useEffect } from "react";
export default function HeroSection() {
  const [info, setInfo] = useState({
    schoolName: "",
    coverURL: "",
  });

  useEffect(() => {
    getCoverImage();
  }, []);
  const getCoverImage = async () => {
    const req = await fetch("http://localhost:3000/settings", {
      method: "GET",
    });
    const res = await req.json();
    if (res.length > 0) {
      setInfo({ schoolName: res[0]?.schoolName, coverURL: res[0]?.coverURL });
    }
  };

  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "yellow", // Adjust text color as needed
    textShadow: "0px 1px 2px darkBlue ",
  };

  return (
    <Card sx={{ borderRadius: 0, background: "lightGray" }}>
      <Box style={{ position: "relative", maxWidth: "100%" }}>
        <CardMedia
          component="img"
          height="400"
          image={
            info.coverURL.length > 0 ? info.coverURL : "/images/school.jpg"
          }
          alt="Hero Image"
        />
        <Typography
          variant="h3"
          style={textStyle}
          sx={{ fontSize: { sm: "5rem" }, textAlign: "center" }}
        >
          {info.schoolName
            ? info.schoolName
            : "JamiderHat Begum Nurunnahar High School"}
        </Typography>
      </Box>
    </Card>
  );
}
