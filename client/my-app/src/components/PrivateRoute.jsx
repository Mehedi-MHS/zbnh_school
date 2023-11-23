import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function PrivateRoute({ children }) {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    checkAuth();
  }, []);
  const checkAuth = async () => {
    const req = await fetch("http://localhost:3000/login/verify", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ code: "zbnhs#secret" }),
    });
    const res = await req.json();
    if (res?.isVerified) {
      setAuth(res.isVerified);
    }
  };

  return auth ? children : <Navigate to="/login" replace />;
}
