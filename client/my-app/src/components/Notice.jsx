import { Button, Box } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
export default function Notice() {
  const boxStyle = {
    margin: "2rem 1rem",
    background: "linear-gradient(to top, cyan,transparent)",
    display: "inline-block",
    padding: "0.5rem",
    borderRadius: "3px",
    boxShadow: "0px 1px 2px black",
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
