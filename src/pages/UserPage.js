import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../action";
import store from "../store";

export default function UserPage() {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>UserPage</h1>
      <p>name: {user?.userInfo?.username}</p>
      <p>score: {user?.userInfo?.score}</p>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        退出登录
      </button>
    </div>
  );
}
