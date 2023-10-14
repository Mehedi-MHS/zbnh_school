import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
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

        <Container sx={{ background: "#fff", padding: "2rem" }}>
          <Stack direction={{ xs: "column", sm: "row" }} gap={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Avatar
                src="/images/black_profile.webp"
                sx={{ width: "30vmin", height: "30vmin", marginBottom: "2rem" }}
              />
              <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
              >
                Upload Profile Picture
                <VisuallyHiddenInput type="file" />
              </Button>
            </Box>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              flexWrap="wrap"
              spacing={1}
            >
              <TextField
                label="Full Name"
                variant="filled"
                type="text"
                required
                fullWidth
              />
              <TextField
                label="Designation"
                variant="filled"
                type="text"
                required
                fullWidth
              />
              <TextField
                label="Father's Name"
                variant="filled"
                type="text"
                required
                fullWidth
              />
              <TextField
                label="Mother's Name"
                variant="filled"
                type="text"
                required
                fullWidth
              />
              <Autocomplete
                sx={{ width: { sm: "30vw" } }}
                disablePortal
                onChange={(e, newValue) =>
                  setTeacherInfo((prev) => ({
                    ...prev,
                    gender: newValue,
                  }))
                }
                options={[
                  { label: "Male", value: "Male" },
                  { label: "Female", value: "Female" },
                ]}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="Select Gender" />
                )}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Typography sx={{ color: "red" }}>
        {teacherInfo.gender ? teacherInfo.gender.label : "no gender"}
      </Typography>
    </>
  );
}
