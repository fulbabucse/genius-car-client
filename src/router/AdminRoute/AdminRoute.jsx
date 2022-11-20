import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useAdmin } from "../../hooks/useAdmin";
import Spinner from "../../pages/Shared/Spinner/Spinner";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
