import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function MarqueeNews() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          padding: "3px 0",
          background: "silver",
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            padding: "0.2rem 1rem",
            background: "red",
            position: "absolute",
            left: "0",
            top: "0",
            bottom: "0",

            zIndex: "4",
          }}
        >
          <Typography variant="h5" sx={{ color: "white" }}>
            Updates
          </Typography>
        </Box>
        <marquee direction="left">
          <Typography variant="h6">News 1. Lorem ipaum </Typography>
        </marquee>
      </Box>
    </>
  );
}
