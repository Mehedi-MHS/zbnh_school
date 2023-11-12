import TeachersBox from "./TeachersBox";
import SEO from "../custom/SEO";
import { Box } from "@mui/material";
export default function Teachers() {
  return (
    <>
      <Box sx={{ width: "100%", minHeight: "100vh" }}>
        <SEO
          title="Our Honourable Teachers"
          description="List of all the honourable teachers of ZamiderHat Begum Nurunnahar High School"
          name="ZamiderHat Begum Nurunnahar High School"
          type="Article"
        />
        <TeachersBox />
      </Box>
    </>
  );
}
