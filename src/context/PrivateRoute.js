import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ component: component, ...rest }) => {
  const token = Cookies.get("token");
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
