import { useDispatch, useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { login } from "../action/user";

export default function LoginPage(props) {
  const dispatch = useDispatch();

  const user = useSelector(({ user }) => user);
  const location = useLocation();

  const from = location.state?.from.pathname || "/";
  if (user.isLogin) {
    return <Navigate to={from} replace={true} />;
  }

  const submit = () => {
    dispatch(login({ username: "asasas" }));
  };

  return (
    <div>
      <h3>LoginPage</h3>

      <button onClick={submit}>login</button>
    </div>
  );
}
