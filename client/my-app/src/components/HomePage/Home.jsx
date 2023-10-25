import HeroSection from "./HeroComponent";
import SEO from "../custom/SEO";
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
    </>
  );
}
