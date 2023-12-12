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
  /*
শিক্ষকের নাম
পদবী
পিতার নাম
মাতার নাম
ইনডেক্স নং
জন্ম তারিখ
স্থায়ী ঠিকানা
বর্তমান ঠিকানা
১ম এম.পি.ও ভুক্তির তারিখ
অত্র বিদ্যালয়ে এম.পি.ও ভুক্তির তারিখ
চাকুরীতে প্রথম যোগদানের তারিখ
অত্র বিদ্যালয়ে যোগদানের তারিখ
বি. এড স্কেল প্রাপ্তির তারিখ
১ম উচ্চতর স্কেল প্রাপ্তির তারিখ
২য় উচ্চতর স্কেল প্রাপ্তির তারিখ
শিক্ষাগত যোগ্যতা 
ব্যাংক হিসাব নং
এন.আইডি নং
মোবাইল নং
প্রশিক্ষণ সংক্রান্ত তথ্য

*/

  const [teacherInfo, setTeacherInfo] = useState({
    picData: "",
    fullName: "",
    designation: "",
    fathersName: "",
    mothersName: "",
    indexNo: "",
    gender: "",
    dateOfBirth: "",
    permanentAddress: "",
    presentAddress: "",
    firstMPOdate: "",
    currentSchoolMPOdate: "",
    firstJoined: "",
    joinedHere: "",
    BEDscaleDate: "",
    firstScaleDate: "",
    secondScaleDate: "",
    education: "",
    bank: "",
    NID: "",
    contact: "",
    information: "",
    religion: "",
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
          background: "url(/images/nature00.jpg) no-repeat ",
          backgroundColor: "skyblue",
          backgroundSize: "cover",
          paddingBottom: "1rem",
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
            backgroundColor: "#fff",
            background: "rgba(255,255,255,0.9)",
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
              rowSpacing={{ xs: 1, sm: 1 }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item sm={6} xs={12}>
                <TextField
                  id="full-name"
                  label="শিক্ষকের নাম"
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
                  label="পদবী"
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
                  label="পিতার নাম"
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
                  label="মাতার নাম"
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
                <TextField
                  label="ইনডেক্স নং"
                  variant="outlined"
                  type="text"
                  required
                  fullWidth
                  margin="none"
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      indexNo: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="জন্মতারিখ"
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
                  label="স্থায়ী ঠিকানা"
                  variant="outlined"
                  type="text"
                  required
                  fullWidth
                  margin="none"
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      permanentAddress: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="বর্তমান ঠিকানা"
                  variant="outlined"
                  type="text"
                  required
                  fullWidth
                  margin="none"
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      presentAddress: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="১ম এম.পি.ও ভুক্তির তারিখ"
                  variant="outlined"
                  type="date"
                  required
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      firstMPOdate: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="অত্র বিদ্যালয়ে এম.পি.ও ভুক্তির তারিখ"
                  variant="outlined"
                  type="date"
                  required
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      currentSchoolMPOdate: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="চাকুরীতে প্রথম যোগদানের তারিখ"
                  variant="outlined"
                  type="date"
                  required
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      firstJoined: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="অত্র বিদ্যালয়ে যোগদানের তারিখ"
                  variant="outlined"
                  type="date"
                  required
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      joinedHere: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="বি.এড স্কেল প্রাপ্তির তারিখ"
                  variant="outlined"
                  type="date"
                  required
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      BEDscaleDate: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="প্রথম উচ্চতর স্কেল প্রাপ্তির তারিখ"
                  variant="outlined"
                  type="date"
                  required
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      firstScaleDate: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="দ্বিতীয় উচ্চতর স্কেল প্রাপ্তির তারিখ"
                  variant="outlined"
                  type="date"
                  required
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      secondScaleDate: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="শিক্ষাগত যোগ্যতা"
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
                  label="ব্যাংক হিসাব নং"
                  variant="outlined"
                  type="text"
                  required
                  fullWidth
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      bank: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="এন.আই.ডি নং"
                  variant="outlined"
                  type="text"
                  required
                  fullWidth
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      NID: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="মোবাইল নং"
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
                  label="প্রশিক্ষণ সংক্রান্ত তথ্য"
                  variant="outlined"
                  type="text"
                  fullWidth
                  margin="none"
                  onChange={(e) => {
                    setTeacherInfo((prevData) => ({
                      ...prevData,
                      information: e.target.value,
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
