import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import SnackbarComponent from "../SnackbarComponent";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
export default function ChangePasswordComponent() {
  const [info, setInfo] = useState({
    oldUser: "",
    oldPassword: "",
    newUser: "",
    newPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const handleClose = () => {
    setSnackbarOpen(false);
  };

  const handleChangePassword = async () => {
    setLoading(true);
    try {
      const req = await fetch(
        "http://localhost:3000/dashboard/settings/changePassword",
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
        alert("Something went wrong! Please try again");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "40vh",
          top: 0,
          marginTop: "1rem",
          paddingTop: "0.5rem",
          paddingBottom: "1rem",
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
            Change Username and Password
          </Typography>
          <Divider />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            gap={3}
            sx={{ marginTop: "2rem" }}
          >
            <TextField
              variant="outlined"
              label="Old Username"
              fullWidth
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, oldUser: e.target.value }))
              }
            />
            <TextField
              variant="outlined"
              label="Old Password"
              type="password"
              fullWidth
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, oldPassword: e.target.value }))
              }
            />
            <TextField
              variant="outlined"
              label="New Username"
              fullWidth
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, newUser: e.target.value }))
              }
            />
            <TextField
              variant="outlined"
              label="New Password"
              type="password"
              fullWidth
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, newPassword: e.target.value }))
              }
            />
          </Stack>
          <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
            <Button
              variant="contained"
              disabled={
                info.newUser.length > 0 &&
                info.newPassword.length > 0 &&
                info.oldUser.length > 0 &&
                info.oldPassword.length > 0
                  ? false
                  : true
              }
              onClick={handleChangePassword}
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
