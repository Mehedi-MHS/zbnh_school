
import MarqueeNews from "./MarqueeNews";
import SEO from "../custom/SEO";
import CarouselComponent from "./Carousel";
import MapAndNavigation from "./MapAndNavigation";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import AboutSection1 from './AboutSection1';
import NewsAndEvents from './NewsAndEvents';
export default function Home() {
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <SEO
          title="Home"
          description="Welcome to ZamiderHat Begum Nurunnahar High School - digital school platform"
          name="ZamiderHat Begum Nurunnahar High School"
          type="Article"
        />
        <CarouselComponent />
        <MarqueeNews />
        <AboutSection1/>
        <NewsAndEvents/>
        <MapAndNavigation />
        <Divider />

      </Box>
    </>
  );
}
