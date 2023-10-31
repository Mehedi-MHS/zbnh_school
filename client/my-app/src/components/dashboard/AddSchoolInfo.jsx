import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardActions } from "@mui/material";
import Container from "@mui/material/Container";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
export default function AddSchoolInfo() {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "70vh",
          background: "rgba(0,0,0,0.1)",
          top: 0,
          paddingTop: "3rem",
        }}
      >
        <Container
          sx={{
            marginTop: "2rem",
          }}
        >
          <Typography variant="h4" component="h1" textAlign="center">
            Add School Information
          </Typography>
          <Card
            sx={{ maxWidth: { xs: "100%", sm: "40%" }, margin: " 2rem auto" }}
          >
            <CardContent>
              <TextField
                type="text"
                label="Title"
                variant="standard"
                sx={{ marginBottom: 2 }}
                fullWidth
              />
              <TextField
                type="text"
                label="Description..."
                fullWidth
                multiline
                sx={{ marginBottom: 2 }}
                rows={2}
              />
              <IconButton component="label" color="success">
                <AddPhotoAlternateIcon />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginLeft: "2px" }}
                >
                  Add Picture
                </Typography>
                <VisuallyHiddenInput type="file" accept="image/*" />
              </IconButton>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="success" fullWidth>
                Save Changes
              </Button>
            </CardActions>
          </Card>
        </Container>
      </Box>
    </>
  );
}
