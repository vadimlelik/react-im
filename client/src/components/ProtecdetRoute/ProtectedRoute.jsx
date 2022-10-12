import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ redirect, element }) => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to={redirect} />;
  }
  return element;
};

export default ProtectedRoute;
