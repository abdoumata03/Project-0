import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Logout = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };

  return (
    <div>
      <Link onClick={logout}>Logout</Link>
    </div>
  );
};

export default Logout;
