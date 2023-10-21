import useAuth from "../CustomHooks/useAuth";
import { Navigate } from "react-router-dom";
export default function PrivateRoute({ children }) {
  const auth = useAuth();

  return auth ? children : <Navigate to="/login" />;
}
