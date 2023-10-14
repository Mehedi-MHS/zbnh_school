import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import { visuallyHidden } from "@mui/utils";
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

  return (
    <>
      <Box sx={{ width: "100vw", minHeight: "100vh", background: "silver" }}>
        <Typography variant="h4" component="h1">
          Add a Teacher
        </Typography>

        <Container>
          <Button component="label" startIcon={<CloudUploadIcon />}>
            Upload Profile Picture
            <visuallyHidden>Hidden</visuallyHidden>
          </Button>

          <Stack direction={{ xs: "column", sm: "row" }}>
            <TextField label="Full Name" variant="filled" type="text" />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
