import StudentCountBox from "./StudentCountBox";
import Box from "@mui/material/Box";
export default function Students() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          background: "rgba(0,0,0,0.1)",
          marginTop: 0,
          paddingTop: "2rem",
        }}
      >
        <StudentCountBox />
      </Box>
    </>
  );
}
