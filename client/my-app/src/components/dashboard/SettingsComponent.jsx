import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card, CardMedia, CardActions } from "@mui/material";
import Container from "@mui/material/Container";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { imageResizer } from "../../helpers/ImageResizer";
import { CircularProgress } from "@mui/material";
import SnackbarComponent from "../SnackbarComponent";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import settings from "../../helpers/Settings";
export default function SettingsComponent() {
  const [info, setInfo] = useState({
    schoolName: "",
    coverData: "",
    coverURL: "",
    logoData: "",
    logoURL: "",
    phone: "",
    email: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("");

  useEffect(() => {
    getSettingsInfo();
  }, []);
  const getSettingsInfo = async () => {
    const req = await fetch(settings.backendURL + "/settings", {
      method: "GET",
    });
    const res = await req.json();
    if (res.length > 0) {
      setInfo((prev) => ({
        ...prev,
        schoolName: res[0]?.schoolName,
        coverURL: res[0]?.coverURL,
        logoURL: res[0]?.logoURL,
        phone: res[0]?.phone,
        email: res[0]?.email,
        location: res[0]?.location,
      }));
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

  const handleCoverPhotoInput = async (e) => {
    const resizedImage = await imageResizer(e.target.files[0], "banner");
    setInfo((prev) => ({
      ...prev,
      coverData: resizedImage.resizedData,
      coverPhotoName: e.target.files[0].name,
    }));
  };

  const handleLogoInput = async (e) => {
    const resizedImage = await imageResizer(e.target.files[0], "square");
    setInfo((prev) => ({
      ...prev,
      logoName: e.target.files[0].name,
      logoData: resizedImage.resizedData,
    }));
  };

  const handleClose = () => {
    setSnackbarOpen(false);
  };

  //Handle cover photo upload
  const handleCoverUpload = async () => {
    setLoading(true);
    try {
      const data = {
        coverData: info.coverData,
        oldCoverPhotoURL: info.coverURL,
        coverPhotoName: info.coverPhotoName,
      };
      const req = await fetch(
        settings.backendURL + "/dashboard/settings/coverPhoto",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const res = await req.json();
      if (res) {
        setLoading(false);
        setSnackbarMessage(res.message);
        setSnackbarOpen(true);
        setSeverity(res.severity);
      } else {
        alert("Something went wrong! Please try again");
      }
    } catch (error) {
      alert(error);
    }
  };
  //////////
  //handle logo upload

  const handleLogoUpload = async () => {
    setLoading(true);
    try {
      const data = {
        logoData: info.logoData,
        oldLogoURL: info.logoURL,
        logoName: info.logoName,
      };
      const req = await fetch(
        settings.backendURL + "/dashboard/settings/logo",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const res = await req.json();
      if (res) {
        setLoading(false);
        setSnackbarMessage(res.message);
        setSnackbarOpen(true);
        setSeverity(res.severity);
      } else {
        alert("Something went wrong! Please try again");
      }
    } catch (error) {
      alert(error);
    }
  };
  ////

  /// Handle footer data upload
  const handleFooterSubmit = async () => {
    setLoading(true);
    try {
      const data = {
        schoolName: info.schoolName,
        phone: info.phone,
        email: info.email,
        location: info.location,
      };
      const req = await fetch(
        settings.backendURL + "/dashboard/settings/footer",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const res = await req.json();
      if (res) {
        setLoading(false);
        setSnackbarMessage(res.message);
        setSnackbarOpen(true);
        setSeverity(res.severity);
      } else {
        alert("Something went wrong! Please try again");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "70vh",
          top: 0,
          marginTop: "1rem",
          paddingTop: "0.5rem",
          paddingBottom: "2rem",
          background: "white",
          borderRadius: "1rem",
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
            sx={{ textAlign: "left", color: "silver" }}
          >
            Cover Photo
          </Typography>
          <Divider />
          <Card
            sx={{
              maxWidth: { xs: "100%", sm: "80%" },
              margin: " 1rem auto",
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
                info.coverData
                  ? info.coverData
                  : info.coverURL
                  ? info.coverURL
                  : "/images/school.jpg"
              }
              sx={{ width: { xs: "90%", sm: "60%" }, margin: "0.5rem auto" }}
            />
            <CardActions>
              <Button
                component="label"
                variant="outlined"
                startIcon={<AddPhotoAlternateIcon />}
              >
                Upload cover photo
                <VisuallyHiddenInput
                  type="file"
                  accept="image/*"
                  onChange={handleCoverPhotoInput}
                />
              </Button>
              <Button
                variant="contained"
                disabled={info.coverData.length > 0 ? false : true}
                onClick={handleCoverUpload}
                sx={{ marginLeft: "1rem" }}
              >
                {loading ? (
                  <CircularProgress sx={{ color: "white" }} size="1rem" />
                ) : (
                  "Save changes"
                )}
              </Button>
            </CardActions>
          </Card>
          <Typography
            variant="p"
            component="p"
            sx={{ textAlign: "left", color: "Silver" }}
          >
            Logo
          </Typography>
          <Divider />
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
                info.logoData
                  ? info.logoData
                  : info.logoURL
                  ? info.logoURL
                  : "/images/logo.png"
              }
              sx={{ width: { xs: "40%", sm: "30%" }, margin: "0.5rem auto" }}
            />
            <CardActions sx={{ margin: "0px auto", textAlign: "center" }}>
              <Button
                component="label"
                variant="outlined"
                startIcon={<AddPhotoAlternateIcon />}
              >
                Upload logo
                <VisuallyHiddenInput
                  type="file"
                  accept="image/*"
                  onChange={handleLogoInput}
                />
              </Button>
              <Button
                variant="contained"
                disabled={info.logoData.length > 0 ? false : true}
                onClick={handleLogoUpload}
                sx={{ marginLeft: "1rem" }}
              >
                {loading ? (
                  <CircularProgress sx={{ color: "white" }} size="1rem" />
                ) : (
                  "Save changes"
                )}
              </Button>
            </CardActions>
          </Card>
          <Typography color="silver">Other Information</Typography>

          <Divider />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            gap={3}
            sx={{ marginTop: "2rem" }}
          >
            <TextField
              variant="outlined"
              label="School Name"
              value={info.schoolName}
              fullWidth
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, schoolName: e.target.value }))
              }
            />
            <TextField
              variant="outlined"
              label="Phone number"
              value={info.phone}
              fullWidth
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
            <TextField
              variant="outlined"
              label="email"
              type="email"
              value={info.email}
              fullWidth
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <TextField
              variant="outlined"
              label="Location"
              value={info.location}
              fullWidth
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, location: e.target.value }))
              }
            />
          </Stack>
          <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
            <Button
              variant="contained"
              disabled={
                info.phone.length > 0 &&
                info.email.length > 0 &&
                info.location.length > 0
                  ? false
                  : true
              }
              onClick={handleFooterSubmit}
            >
              {loading ? (
                <CircularProgress sx={{ color: "white" }} size="1rem" />
              ) : (
                "Save changes"
              )}
            </Button>
          </Box>
          <SnackbarComponent
            message={snackbarMessage}
            open={snackbarOpen}
            close={handleClose}
            severity={severity}
          />
        </Container>
      </Box>
    </>
  );
}
