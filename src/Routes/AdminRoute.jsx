import useAdmin from "../hooks/useAdmin";
import useAuthContext from "../hooks/useAuthContext";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const [isAdmin, isLoading] = useAdmin();
  const location = useLocation();
  if (loading || isLoading) {
    return (
      <div className="py-24 h-screen flex justify-center">
        <progress className="progress w-56 "></progress>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  } else {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
};

export default AdminRoute;
