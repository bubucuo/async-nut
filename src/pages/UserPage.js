import { useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "../auth/auth";

export default function UserPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>UserPage</h1>
      <p>{auth.user?.username}</p>
      <button
        onClick={() => {
          auth.signout(() => navigate("/login"));
        }}
      >
        退出登录
      </button>
    </div>
  );
}
