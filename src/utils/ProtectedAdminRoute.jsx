import { Navigate } from "react-router-dom";
import Error403 from "../Pages/Errors/Error403";

const ProtectedAdminRoute = ({ children }) => {
  try {
    const token = localStorage.getItem("authToken");

    if (!token) {
      return <Navigate to="/login" replace />;
    }

    const role = localStorage.getItem("role");
    if (role !== "admin") {
      return <Error403 />;
    }

    return children;
  } catch (err) {
    console.error("Token decode failed:", err);
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedAdminRoute;
