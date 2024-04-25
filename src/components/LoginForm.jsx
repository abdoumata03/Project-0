import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import Cookies library

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [ErrMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("auth/signin", {
        name,
        password,
      });

      const token = data.token;
      Cookies.set("token", token);
      navigate("/home");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Wrong Name or Password");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      setTimeout(() => {
        setErrMsg("");
      }, 4000);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="felx felx-col w-full gap-[30px]">
        {ErrMsg && (
          <p className="text-[25px] Segoe-semi-bold text-red-700">{ErrMsg}</p>
        )}
        <div className="mb-[5px]">
          <h1 className="text-inherit tx tracking-[0.1em] font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(83.88deg,_#7d26cd,_#e2e2e2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 max-w-full mq450:text-26xl mq750:text-41xl">
            LoGin
          </h1>
        </div>
        <div className="bg-gradient-to-r mb-[30px] wid mx-auto from-[#7D26CD] to-[#E2E2E2] px-[2px] py-[3px] rounded-6xl self-stretch rounded-13xl bg-gray-200 box-border max-w-full">
          <div className="bg-gray-200 rounded-6xl box-border flex itmes-center px-[20px] py-[20px]">
            <div className="h-24 relative rounded-13xl bg-gray-200 box-border hidden max-w-full border-[2px] border-solid border-blueviolet-200" />
            <input
              className="w-full Segoe [border:none] [outline:none] font-segoe-ui-variable text-xl bg-[transparent] h-8 relative tracking-[0.1em] text-gainsboro-200 text-left inline-block max-w-full p-0 z-[1] mq450:text-base"
              placeholder="Team Name (Elec_team)"
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="bg-gradient-to-r mx-auto wid from-[#7D26CD] to-[#E2E2E2] px-[2px] py-[3px] rounded-6xl self-stretch rounded-13xl bg-gray-200 box-border max-w-full">
          <div className="bg-gray-200 rounded-6xl box-border flex itmes-center px-[20px] py-[20px]">
            <div className="h-24 relative rounded-13xl bg-gray-200 box-border hidden max-w-full border-[2px] border-solid border-blueviolet-200" />
            <input
              className="w-full Segoe [border:none] [outline:none] font-segoe-ui-variable text-xl bg-[transparent] h-8 relative tracking-[0.1em] text-gainsboro-200 text-left inline-block max-w-full p-0 z-[1] mq450:text-base"
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="w-full mt-[40px] pb-[30px] pt-[30px] flex flex-row items-start justify-center max-w-full">
          <button
            type="submit"
            className="cursor-pointer py-3.5 px-5 bg-[transparent] w-[330px] rounded-6xl [background:linear-gradient(92.09deg,_#7d26cd,_#171717)] box-border overflow-hidden shrink-0 flex flex-row items-start justify-center max-w-full border-[1px] border-solid border-gainsboro-100 hover:bg-silver-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100"
          >
            <div className="relative Bord text-21xl tracking-[0.16em] font-bord-demo text-white text-center cursor-pointer mq450:text-5xl mq750:text-13xl">
              LoGin
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
