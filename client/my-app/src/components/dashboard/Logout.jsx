import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

import settings from "../../helpers/Settings";
export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const req = await fetch(settings.backendURL + "/login/logout/", {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ code: "zbnhs#secret" }),
    });
    const res = await req.json();
    if (res.isLoggedOut) {
      navigate("/login");
    } else {
      alert("Something Went Wrong! Please try again.");
    }
  };
  return (
    <>
      <Container sx={{ margin: "2rem auto" }}>
        <Button color="error" startIcon={<LogoutIcon />} onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </>
  );
}
