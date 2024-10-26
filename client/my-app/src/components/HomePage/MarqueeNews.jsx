import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { keyframes } from "@emotion/react";
import Stack from "@mui/material/Stack";
import Link from "../custom/CustomLink";
import { useState, useEffect } from "react";
import settings from "../../helpers/Settings";
// Define a keyframe animation
const slide = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

export default function MarqueeNews() {
  const [notices, setNotices] = useState(["No notice found.."]);
  useEffect(() => {
    getNotices();
  }, []);

  const getNotices = async () => {
    const req = await fetch(settings.backendURL + "/notice", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const res = await req.json();
    if (res.length > 0) {
      setNotices([res[0]?.title, res[1]?.title, res[2]?.title]);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
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

      <Box
        sx={{
          animation: `${slide} 18s linear infinite`,
          whiteSpace: "nowrap",
          display: "flex",
          paddingLeft: "50%", // Initial padding to ensure news starts off-screen
        }}
      >
        <Stack direction="row" gap={3}>
          {notices.map((notice, index) => (
            <Typography cursor="pointer" key={index} variant="h6">
              <Link to="notice">{notice} </Link>
            </Typography>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
