import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardActions } from "@mui/material";
import Container from "@mui/material/Container";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState } from "react";
import { imageResizer } from "../../helpers/ImageResizer";
import { CircularProgress } from "@mui/material";
import SnackbarComponent from "../SnackbarComponent";
import settings from "../../helpers/Settings";
export default function AddSchoolInfo() {
  const [info, setInfo] = useState({
    description: "",
    picData: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("");

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

  const handleImageInput = async (e) => {
    setInfo((prev) => ({ ...prev, fileName: e.target.files[0].name }));
    const resizedImage = await imageResizer(e.target.files[0], "banner");
    setInfo((prev) => ({ ...prev, picData: resizedImage.resizedData }));
  };

  const handleClose = () => {
    setSnackbarOpen(false);
  };
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (info.description && info.picData.length > 0) {
        const req = await fetch(
          settings.backendURL + "/dashboard/addGalleryPost",
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(info),
          }
        );
        const res = await req.json();
        if (res) {
          setLoading(false);
          setSnackbarMessage(res.message);
          setSnackbarOpen(true);
          setSeverity(res.severity);
          setInfo({ description: "", picData: "" });
        } else {
          alert("Looks Like you are trying to edit the source code!");
        }
      }
    } catch (error) {
      if (error) {
        alert("Something went wrong");
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "70vh",
          background: "rgba(0,0,0,0.1)",
          top: 0,
          paddingTop: "3rem",
          paddingBottom: "2rem",
        }}
      >
        <Container
          sx={{
            marginTop: "2rem",
          }}
        >
          <Typography variant="h4" component="h1" textAlign="center">
            Add Gallery Post
          </Typography>
          <Card
            sx={{ maxWidth: { xs: "100%", sm: "40%" }, margin: " 2rem auto" }}
          >
            <CardContent>
              <TextField
                type="text"
                label="Description..."
                fullWidth
                value={info.description}
                multiline
                sx={{ marginBottom: 2 }}
                rows={2}
                onChange={(e) =>
                  setInfo((prev) => ({ ...prev, description: e.target.value }))
                }
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
                <VisuallyHiddenInput
                  type="file"
                  accept="image/*"
                  onChange={handleImageInput}
                />
              </IconButton>
              {info.picData.length > 0 ? (
                <img
                  src={info.picData}
                  style={{ width: "200px", margin: "1rem" }}
                />
              ) : null}
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                fullWidth
                disabled={
                  info.description && info.picData.length > 0 ? false : true
                }
                onClick={handleSubmit}
              >
                {loading ? (
                  <CircularProgress sx={{ color: "white" }} size="1rem" />
                ) : (
                  "Save changes"
                )}
              </Button>
            </CardActions>
          </Card>
        </Container>
        <SnackbarComponent
          message={snackbarMessage}
          open={snackbarOpen}
          close={handleClose}
          severity={severity}
        />
      </Box>
    </>
  );
}
