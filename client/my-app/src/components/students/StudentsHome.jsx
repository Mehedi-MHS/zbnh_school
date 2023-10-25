import StudentCountBox from "./StudentCountBox";
import SEO from "../custom/SEO";
export default function Students() {
  return (
    <>
      <SEO
        title="Our Students"
        description="Current students statistics of ZamiderHat Begum Nurunnahar High School"
        name="ZamiderHat Begum Nurunnahar High School"
        type="Article"
      />
      <StudentCountBox />
    </>
  );
}
