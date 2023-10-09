import { Button, Box } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
export default function Notice() {
  const boxStyle = {
    margin: "2rem 1rem",
    backgroundImage:
      "linear-gradient(102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% )",
    display: "inline-block",
    padding: "0.5rem",
    borderRadius: "3px",
  };

  return (
    <>
      <Box sx={boxStyle}>
        <h1>Notice</h1>
        <Button variant="contained" startIcon={<SettingsIcon />}>
          Start Icon
        </Button>
      </Box>
    </>
  );
}
