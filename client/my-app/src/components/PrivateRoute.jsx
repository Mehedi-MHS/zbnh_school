import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function PrivateRoute(props) {
  const [auth, setAuth] = useState(false);
  const { children } = props;
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
        setAuth(true);
      } else {
        setAuth(false);
        navigate("/login");
      }
    }
  };
  return auth ? children : null;
}
