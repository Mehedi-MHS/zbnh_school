import { useState, useEffect } from "react";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    checkVerification();
  }, []);
  const checkVerification = async () => {
    const req = await fetch("http://localhost:3000/login/verify", {
      method: "POST",
      body: JSON.stringify({ code: "zbnhs#secret" }),
    });
    const res = await req.json();
    if (res) {
      setIsAuthenticated(res.isAuthenticated);
    }
  };

  return isAuthenticated;
}
