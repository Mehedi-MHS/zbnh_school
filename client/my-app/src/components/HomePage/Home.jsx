import HeroSection from "./HeroComponent";
import MarqueeNews from "./MarqueeNews";
import SEO from "../custom/SEO";
import CarouselComponent from "./Carousel";
import NavigationBox from "./NavigationBox";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import MessageBox from "./MessageBox";
export default function Home() {
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <SEO
          title="Home"
          description="Welcome to ZamiderHat Begum Nurunnahar High School - digital school management system"
          name="ZamiderHat Begum Nurunnahar High School"
          type="Article"
        />
        <HeroSection />
        <MarqueeNews />
        <NavigationBox />
        <MessageBox />
        <Divider />
        <CarouselComponent />
      </Box>
    </>
  );
}
