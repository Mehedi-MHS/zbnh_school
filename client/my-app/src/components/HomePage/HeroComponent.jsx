import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import "@fontsource/roboto/400.css";

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
    <Card sx={{ borderRadius: 0, background: "red" }}>
      <Box style={{ position: "relative", maxWidth: "100%" }}>
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
