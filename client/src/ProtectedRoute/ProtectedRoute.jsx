import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function ProtectedRoute({ element, ...rest }) {
  const { user } = useContext(UserContext);

  return user ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/home/login" />
  );
}
