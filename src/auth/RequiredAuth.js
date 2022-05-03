import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/auth";

export default function RequiredAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to={"/login"} state={{ from: location }} replace={true} />;
  }

  return children;
}
