import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../store/const";

export const login = (userInfo) => ({ type: LOGIN_SUCCESS, payload: userInfo });
export const logout = (userInfo) => ({
  type: LOGOUT_SUCCESS,
  payload: userInfo,
});
