import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card, CardMedia, CardContent, CardActions } from "@mui/material";
import Container from "@mui/material/Container";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { imageResizer } from "../../helpers/ImageResizer";
import { CircularProgress } from "@mui/material";
import SnackbarComponent from "../SnackbarComponent";
export default function CoverPhotoComponent() {
  const [info, setInfo] = useState({
    picData: "",
    oldFileURL: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("");

  useEffect(() => {
    getCoverImage();
  }, []);
  const getCoverImage = async () => {
    const req = await fetch("http://localhost:3000/settings", {
      method: "GET",
    });
    const res = await req.json();
    if (res.length > 0) {
      setInfo((prev) => ({ ...prev, oldFileURL: res[0].fileURL }));
    }
  };

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
    const resizedImage = await imageResizer(e.target.files[0]);
    setInfo((prev) => ({ ...prev, picData: resizedImage.resizedData }));
  };

  const handleClose = () => {
    setSnackbarOpen(false);
  };
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (info.picData.length > 0) {
        const req = await fetch("http://localhost:3000/dashboard/settings", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(info),
        });
        const res = await req.json();
        if (res) {
          setLoading(false);
          setSnackbarMessage(res.message);
          setSnackbarOpen(true);
          setSeverity(res.severity);
        } else {
          alert("Something went wrong! Please try again");
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
          <Typography
            variant="p"
            component="p"
            sx={{ textAlign: "center", color: "darkBlue" }}
          >
            Change Cover Photo
          </Typography>
          <Card
            sx={{
              maxWidth: { xs: "100%", sm: "80%" },
              margin: " 2rem auto",
              background: "none",
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={
                info.picData
                  ? info.picData
                  : info.oldFileURL
                  ? info.oldFileURL
                  : "/images/school.jpg"
              }
              sx={{ width: { xs: "90%", sm: "60%" }, margin: "1rem auto" }}
            />
            <CardContent></CardContent>
            <CardActions sx={{ margin: "0px auto", textAlign: "center" }}>
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

              <Button
                variant="contained"
                disabled={info.picData.length > 0 ? false : true}
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
