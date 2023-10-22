import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListIcon from "@mui/icons-material/List";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
export default function Footer() {
  return (
    <>
      <Box
        sx={{
          maxWidth: "100vw",
          padding: { xs: "1rem 0.5rem", sm: "2rem 1rem" },
          background: "darkBlue",
          borderTop: "4px solid #04cca1",
        }}
      >
        <Stack direction={{ xs: "column", sm: "row" }} gap={3}>
          <Box>
            <Typography variant="h5" component="div" sx={{ color: "white" }}>
              <ListIcon /> Main Menu
            </Typography>
            <Divider />
            <ul>
              <li>Notice</li>
              <li>Teachers</li>
              <li>Students</li>
              <li>Gallery</li>
              <li>About School</li>
            </ul>
          </Box>
          <Box>Related Links</Box>
          <Box>Contact Information</Box>
        </Stack>
      </Box>
    </>
  );
}
