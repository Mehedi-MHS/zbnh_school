import Typography from "@mui/material/Typography";

import TeachersBox from "./TeachersBox";
export default function Teachers() {
  return (
    <>
      <Typography variant="h3" component="h1" sx={{ margin: "5% auto" }}>
        Teachers
      </Typography>
      <TeachersBox />
    </>
  );
}
