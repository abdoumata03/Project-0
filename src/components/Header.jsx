import logoimage from "../public/images/logo mark.png";
import { Link } from "react-router-dom";
import icon from "../public/images/icon.png";
import { useState } from "react";

const Header = (props) => {
  const [toggel, setToggel] = useState(false);

  const handelClick = () => {
    setToggel(!toggel);
  };
  return (
    <header className="w-full Segoe z-[10] h-[70px] shrink-0 flex items-center [background:linear-gradient(90deg,_#3f1367,_#7d26cd)]">
      <div className="flex items-center mx-auto pl-[20px] pr-[20px] justify-between container">
        <div className="logo flex items-center gap-[15px]">
          <img
            className="h-[51px] w-[28.5px] relative z-[2]"
            loading="lazy"
            alt=""
            src={logoimage}
          />
          <div className="cursor-pointer tracking-[0.24em] text-[22px] z-[3]">
            <Link to={"/home"}>PROJECT-0</Link>
          </div>
        </div>
        <div className="links flex items-center mq653:hidden gap-[50px]">
          <Link to={"/home"}>Home</Link>
          <Link to={"/scoreboard"}>Scoreboard</Link>
          <Link to={"/verses"}>Verses</Link>
          <div className="icon">{props.image}</div>
        </div>
        <div className="bar-icon relative hidden mq653:block">
          <img
            onClick={handelClick}
            className="h-[30px] w-[30px] z-[2]"
            loading="lazy"
            alt=""
            src={icon}
          />
          {toggel && (
            <div className="dropdown z-[10] cursor-pointer absolute bg-red-600 items-center rounded-xl justify-center w-[200px] pt-[25px] pb-[25px] flex flex-col gap-[30px] right-[0px] border-[3px] border-solid border-darkblue [background:linear-gradient(90deg,_#7d26cd,_#171717)]">
              <Link to={"/home"}>Home</Link>
              <Link to={"/scoreboard"}>Scoreboard</Link>
              <Link to={"/verses"}>Verses</Link>
              {props.event}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
