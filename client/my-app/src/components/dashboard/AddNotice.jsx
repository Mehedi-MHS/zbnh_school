import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardActions } from "@mui/material";
import Container from "@mui/material/Container";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
export default function AddNotice() {
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
          background: "silver",
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
            Add New Notice
          </Typography>
          <Card
            sx={{
              maxWidth: { xs: "100%", sm: "40%" },
              margin: " 2rem auto",
            }}
            variant="outlined"
          >
            <CardContent>
              <TextField
                type="text"
                label="Title"
                variant="standard"
                sx={{ marginBottom: 2 }}
                fullWidth
              />
              <IconButton component="label" color="success">
                <PictureAsPdfIcon />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginLeft: "2px" }}
                >
                  Add PDF Notice
                </Typography>
                <VisuallyHiddenInput type="file" accept=".pdf" />
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
