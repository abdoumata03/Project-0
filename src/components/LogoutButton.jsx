import React from "react";
import logoutimage from "../public/images/logout.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    Cookies.remove("Token");
  };
  return (
    <div onClick={handleClick}>
      <img
        className="h-[27.5px] w-[25px] cursor-pointer z-[2]"
        loading="lazy"
        alt=""
        src={logoutimage}
      />
    </div>
  );
};

export default LogoutButton;
