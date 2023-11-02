import HeroSection from "./HeroComponent";
import MarqueeNews from "./MarqueeNews";
import SEO from "../custom/SEO";
import Carousel from "./Carousel";
export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to ZamiderHat Begum Nurunnahar High School - digital school management system"
        name="ZamiderHat Begum Nurunnahar High School"
        type="Article"
      />
      <HeroSection />
      <MarqueeNews />

      <Carousel />
    </>
  );
}
