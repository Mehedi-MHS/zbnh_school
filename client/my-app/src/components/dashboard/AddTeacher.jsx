import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { imageResizer } from "../../helpers/ImageResizer";
import { CircularProgress } from "@mui/material";
import SnackbarComponent from "../SnackbarComponent";
export default function AddTeacher() {
  const [teacherInfo, setTeacherInfo] = useState({
    picData: "",
    fullName: "",
    designation: "",
    fathersName: "",
    mothersName: "",
    gender: "",
    education: "",
    religion: "",
    dateOfBirth: "",
    contact: "",
    email: "",
    bloodGroup: "",
    joined: "",
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

  const handleFileSelection = async (event) => {
    setTeacherInfo((prev) => ({
      ...prev,
      fileName: event.target.files[0].name,
    }));
    const resized = await imageResizer(event.target.files[0], "square");
    setTeacherInfo((prev) => ({ ...prev, picData: resized.resizedData }));
  };

  const handleClose = () => {
    setSnackbarOpen(false);
  };
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (
        teacherInfo.fullName &&
        teacherInfo.designation &&
        teacherInfo.gender
      ) {
        const req = await fetch("http://localhost:3000/dashboard/editTeacher", {
          method: "POST",
          credentials: "include",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(teacherInfo),
        });
        const res = await req.json();
        if (res) {
          setSnackbarMessage(res.message);
          setSnackbarOpen(true);
          setSeverity(res.severity);
        }
      } else {
        return;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          paddingTop: "2rem",
          background: "skyblue",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{
            margin: "2rem auto",
            color: "white",
            textShadow: "0px 1px 2px black",
          }}
        >
          Add a Teacher
        </Typography>

        <Container
          sx={{
            background: "#fff",
            paddingBottom: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            gap={2}
            sx={{ padding: 3 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",

                padding: "1rem",
              }}
            >
              <Avatar
                src={teacherInfo.picData || "/images/blank_profile.webp"}
                sx={{ width: "30vmin", height: "30vmin", marginBottom: "2rem" }}
              />
              <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
              >
                Upload Profile Picture
                <VisuallyHiddenInput
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelection}
                />
              </Button>
            </Box>
            <Grid
              container
              rowSpacing={{ xs: 1, sm: 0 }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item sm={6} xs={12}>
                <TextField
                  id="full-name"
                  label="Full Name"
                  variant="outlined"
                  type="text"
                  required
                  fullWidth
                  margin="none"
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      fullName: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="Designation"
                  variant="outlined"
                  type="text"
                  required
                  fullWidth
                  margin="none"
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      designation: e.target.value,
                    }));
                  }}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  label="Father's Name"
                  variant="outlined"
                  type="text"
                  required
                  fullWidth
                  margin="none"
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      fathersName: e.target.value,
                    }));
                  }}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  label="Mother's Name"
                  variant="outlined"
                  type="text"
                  required
                  fullWidth
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      mothersName: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth required>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={teacherInfo.gender}
                    label="Gender"
                    onChange={(event) => {
                      setTeacherInfo((prev) => ({
                        ...prev,
                        gender: event.target.value,
                      }));
                    }}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="Education"
                  variant="outlined"
                  type="text"
                  required
                  fullWidth
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      education: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="Religion"
                  variant="outlined"
                  type="text"
                  fullWidth
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      religion: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="Date of Birth"
                  variant="outlined"
                  type="date"
                  required
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      dateOfBirth: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="Contact Number"
                  variant="outlined"
                  type="number"
                  fullWidth
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      contact: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  fullWidth
                  margin="none"
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      email: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="Blood Group"
                  variant="outlined"
                  type="text"
                  fullWidth
                  margin="none"
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      bloodGroup: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="Joined"
                  variant="outlined"
                  type="date"
                  required
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      joined: e.target.value,
                    }));
                  }}
                />
              </Grid>
            </Grid>
          </Stack>
          <Box textAlign="center">
            <Button
              variant="contained"
              disabled={
                teacherInfo.fullName &&
                teacherInfo.designation &&
                teacherInfo.gender
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
          </Box>
        </Container>
      </Box>
      <SnackbarComponent
        message={snackbarMessage}
        open={snackbarOpen}
        close={handleClose}
        severity={severity}
      />
    </>
  );
}
