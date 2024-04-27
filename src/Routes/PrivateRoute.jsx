import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (loading) {
    return (
      <div className="py-24 h-screen flex justify-center">
        <progress className="progress w-56 "></progress>
      </div>
    );
  }

  if (user) {
    return children;
  }
  if (!user) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
};

export default PrivateRoute;
