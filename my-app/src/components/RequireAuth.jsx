import { Navigate, redirect, useLocation } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
export function RequireAuth({ children }) {
  const { auth } = useAuth();
  const location = useLocation();

  // if (auth.token) console.log(location, auth.token);

  if (!auth.token)
    return <Navigate to="/login" state={{ from: location }} replace />;
  else return children;
}
