import { useSelector } from "react-redux";
import { selectUserSlice } from "../redux/slices/userSlice";

export function useAuth() {
  const {email, token, id} = useSelector(selectUserSlice);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}