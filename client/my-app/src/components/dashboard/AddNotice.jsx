import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardActions } from "@mui/material";
import Container from "@mui/material/Container";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import SnackbarComponent from "../SnackbarComponent";
export default function AddNotice() {
  const [info, setInfo] = useState({
    title: "",
    fileName: "",
  });
  const [pdf, setPdf] = useState(null);
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

  const handlePDFInput = (e) => {
    const file = e.target.files[0];
    if (file.name.split(".").pop().toLowerCase() == "pdf") {
      setPdf(e.target.files[0]);
      setInfo((prev) => ({ ...prev, fileName: e.target.files[0].name }));
    } else {
      alert("Please selecct a pdf file!!");
      setPdf(null);
      setInfo({ title: "", fileName: "" });
      return;
    }
  };

  const handleClose = () => {
    setSnackbarOpen(false);
  };
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (
        info.title &&
        info.fileName.split(".").pop().toString().toLowerCase() === "pdf"
      ) {
        let formData = new FormData();
        formData.append("pdf", pdf);
        formData.append("title", info.title);
        const req = await fetch("http://localhost:3000/dashboard/addNotice", {
          method: "POST",
          credentials: "include",
          body: formData,
        });
        const res = await req.json();
        if (res) {
          setLoading(false);
          setSnackbarMessage(res.message);
          setSnackbarOpen(true);
          setSeverity(res.severity);
          setInfo({ title: "", fileName: "" });
        } else {
          alert("Please enter title and select a pdf file.");
        }
      }
    } catch (error) {
      if (error) {
        alert(error);
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
            Add New Notice
          </Typography>
          <Card
            sx={{ maxWidth: { xs: "100%", sm: "40%" }, margin: " 2rem auto" }}
          >
            <CardContent>
              <TextField
                type="text"
                label="Title"
                fullWidth
                value={info.title}
                sx={{ marginBottom: 2 }}
                onChange={(e) =>
                  setInfo((prev) => ({ ...prev, title: e.target.value }))
                }
              />
              <IconButton component="label" color="success">
                <PictureAsPdfIcon />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginLeft: "2px" }}
                >
                  Add PDF file
                </Typography>
                <VisuallyHiddenInput
                  type="file"
                  accept="application/pdf"
                  onChange={handlePDFInput}
                />
              </IconButton>
              {info.fileName.length > 0 ? (
                <IconButton>
                  <Typography variant="body2">{info.fileName}</Typography>
                </IconButton>
              ) : null}
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                fullWidth
                disabled={info.title && info.fileName.length > 0 ? false : true}
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
