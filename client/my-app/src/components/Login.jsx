import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function Login() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          padding: "2rem auto",
          background: "linear-gradient(to top right, darkBlue,magenta)",
          display: "flex",
          justifyContent: "Center",
          alignItems: "center",
        }}
      >
        <Card sx={{ width: "370px" }}>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              Login
            </Typography>

            <TextField
              type="text"
              label="Your name"
              fullWidth
              sx={{ marginBottom: "0.5rem" }}
            />
            <TextField type="password" label="Enter password" fullWidth />
          </CardContent>
          <CardActions>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
