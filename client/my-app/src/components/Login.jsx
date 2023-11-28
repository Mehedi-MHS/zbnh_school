import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import SnackbarComponent from "./SnackbarComponent";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [info, setInfo] = useState({
    name: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const req = await fetch("http://localhost:3000/login/verify", {
      method: "POST",
      credentials: "include",
    });
    const res = await req.json();
    if (res) {
      if (res.isVerified) {
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    }
  };
  const handleClose = () => {
    setSnackbarOpen(false);
  };
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (info.name.length > 3 && info.password.length > 7) {
        const req = await fetch("http://localhost:3000/login", {
          method: "POST",
          credentials: "include",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(info),
        });
        const res = await req.json();
        if (res) {
          setLoading(false);
          setSnackbarMessage(res.message);
          setSnackbarOpen(true);
          setSeverity(res.severity);
          if (res.success) {
            setTimeout(() => {
              navigate("/dashboard");
            }, 1000);
          }
        } else {
          alert("Something went wrong! Please try again.");
        }
      } else {
        alert("Please fill all the fields and try again!");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          padding: "2rem auto",
          background: "linear-gradient(to top right, darkBlue,magenta)",
          display: "flex",
          justifyContent: "Center",
          alignItems: "center",
        }}
      >
        <Card sx={{ width: "370px" }}>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              Login
            </Typography>

            <TextField
              type="text"
              label="Your name"
              fullWidth
              sx={{ marginBottom: "0.5rem" }}
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <TextField
              type="password"
              label="Enter password"
              fullWidth
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              fullWidth
              disabled={
                info.name.length > 3 && info.password.length > 7 ? false : true
              }
              onClick={handleSubmit}
            >
              {loading ? (
                <CircularProgress sx={{ color: "white" }} size="1rem" />
              ) : (
                "Login"
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
      </Box>
    </>
  );
}
