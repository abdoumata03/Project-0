import React from "react";
import loginimage from "../public/images/Login.png";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate("/login");
  };
  return (
    <div>
      <img
        onClick={handelClick}
        className="h-[27.5px] w-[25px] cursor-pointer z-[2]"
        loading="lazy"
        alt=""
        src={loginimage}
      />
    </div>
  );
};

export default LoginButton;
