import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardHeader, CardContent } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
export default function TeachersProfileHome() {
  const { id } = useParams();
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to top right,magenta,cyan)",
          width: "100vw",
          height: "100vh",
          padding: { xs: " 8vw 2vw", sm: " 10vw 5vw" },
        }}
      >
        <Card>
          <CardHeader>
            <Typography>CardHeader</Typography>
          </CardHeader>
          <CardContent>
            <Stack>
              <Typography>{`User ID:${id}`}</Typography>
              <Typography>CardContent</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
