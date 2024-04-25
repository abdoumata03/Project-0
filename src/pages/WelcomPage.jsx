import Header from "../components/Header";
import bgimage from "../public/images/background.png";
import "../fonts/bord-demo/Bord.otf";
import "../fonts/SegoeUI-VF/Segoe-UI-Variable-Static-Small-Light.ttf";
import { useNavigate } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import Login from "../components/Login";
import Cookies from "js-cookie";
import { useEffect } from "react";

const WelcomePage = () => {
  useEffect(() => {
    Cookies.remove("token");
  });
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/login");
  };
  return (
    <>
      <Header image={<LoginButton />} event={<Login />} />
      <div
        style={{ backgroundImage: `url("${bgimage}")` }}
        className="w-full bg-no-repeat bg-cover h-full min-h-screen relative bg-gray-100 flex object-cover flex-col items-start justify-start pt-0 px-0 box-border tracking-[normal] mq450:gap-[28px_112px] px-[20px] mq975:gap-[56px_112px]"
      >
        <div className="bg-gradient-to-r mt-[70px] from-[#7D26CD] to-[#E2E2E2] px-[5px] py-[5px] rounded-6xl self-stretch flex flex-row items-start justify-center py-0 px-10 box-border w-[1024px] mx-auto max-w-full">
          <section className="w-full flex flex-col items-end justify-start gap-[30px] max-w-full text-center text-[40px] text-white font-bord-demo">
            <div className="self-stretch rounded-9xl bg-gray-100 box-border overflow-hidden flex flex-col items-center justify-start pt-4 px-5 max-w-full z-[1]  mq700:gap-[22px_89.5px] mq700:pt-5 mq700:pb-10 mq700:box-border mq975:gap-[45px_89.5px]">
              <div className="mt-[60px] flex flex-col Bord items-start justify-start gap-[30px] max-w-full">
                <h1 className="m-0 self-stretch w-[800px] mq1125:w-full mx-auto text-inherit font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(83.88deg,_#7d26cd,_#e2e2e2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 mq450:text-10xl mq975:text-19xl">
                  <span className="tracking-[0.17em]">WelcomE To</span>
                  {` `}
                  <span className="tracking-[0.17em]">ProJecT-0</span>
                </h1>
                <h1 className="m-0 Segoe-semi-bold w-[800px] mq1125:w-full mx-auto pb-[70px] self-stretch text-[32px] tracking-[0.16em] mq540:pb-[140px] inline-block shrink-0 mq450:text-5xl mq975:text-13xl">
                  From now on your job is to discover the mystery of project-0
                  by solving challenges in artificial intelligence, problem
                  solving, cyber security, and design.
                </h1>
              </div>
            </div>
          </section>
        </div>
        <div className="flex mt-[40px] flex-row items-center mx-auto justify-center py-0 px-5 box-border max-w-full">
          <button
            onClick={handelClick}
            className="cursor-pointer py-3.5 px-5 bg-[transparent] w-[320px] rounded-6xl [background:linear-gradient(92.09deg,_#7d26cd,_#171717)] box-border overflow-hidden shrink-0 flex flex-row items-start justify-center max-w-full z-[1] border-[1px] border-solid border-gainsboro-100 hover:bg-silver-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100"
          >
            <div className="relative Bord text-[32px] tracking-[0.16em] font-bord-demo text-white text-center cursor-pointer mq450:text-5xl mq975:text-13xl">
              LoGin
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
