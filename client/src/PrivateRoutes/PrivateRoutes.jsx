import useAuth from "../hook/useAuth";
import { Navigate, useLocation } from "react-router";
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation()
  // console.log(location.pathname)
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoutes;
