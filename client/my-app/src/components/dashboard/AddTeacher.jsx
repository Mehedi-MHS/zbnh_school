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
          width: "100vw",
          minHeight: "100vh",
          paddingTop: "2rem",
          background: "silver",
        }}
      >
        <Typography variant="h4" component="h1" align="center">
          Add a Teacher
        </Typography>

        <Container sx={{ background: "#fff" }} disableGutters>
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
                background: "black",
                padding: "1rem",
              }}
            >
              <Avatar
                src="/images/black_profile.webp"
                sx={{ width: "30vmin", height: "30vmin", marginBottom: "2rem" }}
              />
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload Profile Picture
                <VisuallyHiddenInput type="file" />
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
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  label="Mother's Name"
                  variant="outlined"
                  type="text"
                  required
                  fullWidth
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
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="Religion"
                  variant="outlined"
                  type="text"
                  fullWidth
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
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="Contact Number"
                  variant="outlined"
                  type="number"
                  fullWidth
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  fullWidth
                  margin="none"
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  label="Blood Group"
                  variant="outlined"
                  type="text"
                  fullWidth
                  margin="none"
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
                />
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
