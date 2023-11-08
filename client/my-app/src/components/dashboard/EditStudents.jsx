import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import SnackbarComponent from "../SnackbarComponent";
export default function EditStudents() {
  const [student, setStudent] = useState({
    class: null,
    total: null,
  });

  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const classOptions = [
    {
      label: "Six",
      value: 6,
    },
    {
      label: "Seven",
      value: 7,
    },
    {
      label: "Eight",
      value: 8,
    },
    {
      label: "Nine",
      value: 9,
    },
    {
      label: "Ten",
      value: 10,
    },
  ];
  const handleClose = () => {
    setSnackbarOpen(false);
  };
  const handleSubmit = async () => {
    setLoading(true);
    const data = { cls: student.class, total: student.total };
    const req = await fetch("http://localhost:3000/dashboard/editStudents", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    if (res) {
      setLoading(false);
      setSnackbarMessage(res.message);
      setSnackbarOpen(true);
      setSeverity(res.severity);
    }
  };

  return (
    <>
      <Container
        sx={{
          width: "100vw",
          height: "100vh",
          padding: "7% 2%",
          background: "rgba(0,0,0,0.1)",
          mb: "2rem",
        }}
      >
        <Card
          sx={{ minWidth: 275, maxWidth: { sm: "30vw" }, margin: "0px auto" }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="h1"
              color="text.secondary"
              gutterBottom
            >
              <EditIcon
                sx={{
                  color: "black",
                  fontSize: "inherit",
                  marginRight: "1rem",
                }}
              />
              Edit Students
            </Typography>
            <Stack spacing={3}>
              <Autocomplete
                disablePortal
                onChange={(e, newValue) =>
                  setStudent((prev) => ({ ...prev, class: newValue?.value }))
                }
                id="edit-studensts-box"
                options={classOptions}
                renderInput={(params) => (
                  <TextField {...params} label="Select Class" />
                )}
              />
              <TextField
                variant="filled"
                label="Total Students.."
                onChange={(e) =>
                  setStudent((prev) => ({ ...prev, total: e.target.value }))
                }
                type="number"
                required
              />
            </Stack>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              disabled={student.class && student.total ? false : true}
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
        <SnackbarComponent
          message={snackbarMessage}
          open={snackbarOpen}
          close={handleClose}
          severity={severity}
        />
      </Container>
    </>
  );
}
