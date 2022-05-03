import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function RequiredAuth({ children }) {
  const user = useSelector(({ user }) => user);

  const location = useLocation();

  if (!user.isLogin) {
    return <Navigate to={"/login"} state={{ from: location }} replace={true} />;
  }

  return children;
}
