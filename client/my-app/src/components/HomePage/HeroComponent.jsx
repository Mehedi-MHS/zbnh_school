import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import "@fontsource/roboto/400.css";
import { useState, useEffect } from "react";
import settings from "../../helpers/Settings";
export default function HeroSection() {
  const [info, setInfo] = useState({
    schoolName: "",
    coverURL: "",
  });

  useEffect(() => {
    getCoverImage();
  }, []);
  const getCoverImage = async () => {
    const req = await fetch(settings.backendURL + "/settings", {
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
    left: "10%",
    transform: "translate(-10%, -50%)",
    color: "yellow", // Adjust text color as needed
    lineHeight:"130%",
    textShadow: "0px 1px 2px black ",
  };

  return (
    <Card sx={{ borderRadius: 0, background: "lightGray" }}>
      <Box sx={{ position: "relative", maxWidth: "100%" }}>
        <Box sx={{position:"absolute",width:"100%",height:"100%",background:"rgba(40,130,143,0.5)"}}>

        </Box>
        <CardMedia
          component="img"
          height="400"
          sx={{zIndex:"10"}}
          image={
            info.coverURL.length > 0 ? info.coverURL : "/images/school.jpg"
          }
          alt="Hero Image"
        />
        <Box sx={{width:"100%",height:"100%",position:"absolute"}}>
        <Typography
          variant="h3"
          style={textStyle}
          sx={{
            fontSize: { sm: "5rem" },
            textAlign: "center",
          }}
        >
          {info.schoolName
            ? info.schoolName
            : "JamiderHat Begum Nurunnahar High School"}
        </Typography>
        </Box>
        
      </Box>
    </Card>
  );
}
