import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PublicRoute = ({ component: component, ...rest }) => {
  const token = Cookies.get("token");
  return token ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute;