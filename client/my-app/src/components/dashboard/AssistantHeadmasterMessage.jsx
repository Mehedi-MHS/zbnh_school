import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardActions } from "@mui/material";
import Container from "@mui/material/Container";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import { imageResizer } from "../../helpers/ImageResizer";
import { CircularProgress } from "@mui/material";
import SnackbarComponent from "../SnackbarComponent";
export default function HeadmasterMessage() {
  const [info, setInfo] = useState({
    title: "",
    description: "",
    picData: "",
    oldPicURL: "",
    person: "assistantHeadmaster",
  });
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("");

  useEffect(() => {
    getHeadmasterInfo();
  }, []);
  const getHeadmasterInfo = async () => {
    const req = await fetch("http://localhost:3000/getHeadmasterMessage", {
      method: "get",
      headers: { "Content-type": "application/json" },
      credentials: "include",
    });
    const res = await req.json();
    setInfo((prev) => ({
      ...prev,
      title: res[1]?.title,
      description: res[1]?.description,
      oldPicURL: res[1]?.picURL,
    }));
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
    const resizedImage = await imageResizer(e.target.files[0], "square");
    setInfo((prev) => ({ ...prev, picData: resizedImage.resizedData }));
  };

  const handleClose = () => {
    setSnackbarOpen(false);
  };
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (
        info.description &&
        (info.picData.length > 0 || info.oldPicURL.length > 0)
      ) {
        const req = await fetch(
          "http://localhost:3000/dashboard/headmasterMessage",
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
            Edit Assistant Headmaster Message
          </Typography>
          <Card
            sx={{ maxWidth: { xs: "100%", sm: "40%" }, margin: " 2rem auto" }}
          >
            <CardContent>
              <Avatar
                alt="Assistant Headmaster profile picture"
                src={
                  info.picData.length > 0
                    ? info.picData
                    : info.oldPicURL.length > 0
                    ? info.oldPicURL
                    : "/images/avatar0.webp"
                }
                sx={{
                  width: { xs: 95 },
                  height: { xs: 95 },
                  margin: "1rem auto",
                }}
              />
              <TextField
                type="text"
                label="Title"
                fullWidth
                value={info.title}
                sx={{ marginBottom: 2 }}
                InputLabelProps={{ shrink: true }}
                onChange={(e) =>
                  setInfo((prev) => ({ ...prev, title: e.target.value }))
                }
              />
              <TextField
                type="text"
                label="Message..."
                fullWidth
                value={info.description}
                multiline
                sx={{ marginBottom: 2 }}
                InputLabelProps={{ shrink: true }}
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
                  Change profile picture
                </Typography>
                <VisuallyHiddenInput
                  type="file"
                  accept="image/*"
                  onChange={handleImageInput}
                />
              </IconButton>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                fullWidth
                disabled={
                  info.description &&
                  (info.picData.length > 0 || info.oldPicURL.length > 0)
                    ? false
                    : true
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
