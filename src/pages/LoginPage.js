import { useDispatch, useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { login } from "../action";

export default function LoginPage() {
  const user = useSelector(({ user }) => user);

  const dispatch = useDispatch();

  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  if (user.isLogin) {
    return <Navigate to={from} replace={true} />;
  }

  const { err, loading } = user;

  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");

    dispatch(login({ username }));
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <form onSubmit={submit}>
        <input type="text" name="username" />
        <button type="submit">{loading ? "loading..." : "login"}</button>
        <p className="red"> {err.msg}</p>
      </form>
    </div>
  );
}
