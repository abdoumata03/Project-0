import React from "react";
import Header from "../components/Header";
import bgimage from "../public/images/background.png";
import "../fonts/bord-demo/Bord.otf";
import "../fonts/SegoeUI-VF/Segoe-UI-Variable-Static-Text-Light.ttf";
import LogoutButton from "../components/LogoutButton";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handelCilck = () => {
    navigate("/verses");
  };
  return (
    <div>
      <div
        style={{ backgroundImage: `url("${bgimage}")` }}
        className="w-full h-full bg-no-repeat bg-cover  min-h-screen relative bg-gray-100 flex flex-col items-start justify-start pt-0 px-0 pb-[90px] box-border gap-[52px] tracking-[normal] mq450:gap-[18px_72px] mq750:gap-[36px_72px]"
      >
        <Header image={<LogoutButton />} event={<Logout />} />
        <main className="self-stretch h-full flex flex-row items-start justify-center  py-0 px-5 box-border max-w-full">
          <div
            className="bg-gradient-to-r from-[#7D26CD] to-[#E2E2E2] px-[5px] py-[5px]
          rounded-6xl self-stretch flex flex-row items-start justify-center py-0
          px-10 box-border w-[1024px] lg:w-[990px] mq1025:w-[750px] mx-auto
          max-w-full"
          >
            <section className="w-full rounded-6xl bg-gray-100 box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-14 px-5 pb-[81px] gap-[70px] max-w-full z-[1] text-center text-45xl text-white lg:pt-9 lg:pb-[53px] lg:box-border">
              <div className="w-[930px] flex  flex-col items-start justify-start gap-[24px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
                  <h1 className="m-0 Bord w-[645px] text-inherit tracking-[0.12em] font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(83.88deg,_#7d26cd,_#e2e2e2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0 max-w-full mq450:text-19xl mq1050:text-32xl">
                    BasE StorY
                  </h1>
                </div>
                <h1 className="m-0 Segoe self-stretch h-full text-[32px]  tracking-[0.13em] inline-block shrink-0 mb-[30px] mq450:text-3xl mq1050:text-10xl">
                  Vegapunk attempted to discover the world's secret by building
                  a time machine, but his experiment went awry, leading in the
                  creation of a space-time machine that united four universes:
                  One Piece, Sherlock Holmes, Watch Dogs, and Doctor Strange.
                  This incident created a concern because the four universes
                  clashed, resulting in their demise. Feeling responsible,
                  Vegapunk attempted to lock the gates but realized he couldn't
                  do so alone in his own universe. He went out to anybody in the
                  impacted universes, but only Doctor Strange received the
                  message. However, as the hero he is, Doctor Strange
                  transmitted the message to Sherlock, Aiden Pearce, and
                  Vegapunk, imploring them to work together to tackle the issue.
                </h1>
              </div>
              <div className="w-[930px] flex items-start mq765:mt-[40px] justify-center max-w-full">
                <button className="cursor-pointer py-3.5 px-5 bg-[transparent] w-[362px] rounded-6xl [background:linear-gradient(92.09deg,_#7d26cd,_#171717)] box-border overflow-hidden shrink-0 flex flex-row items-start justify-center max-w-full border-[1px] border-solid border-gainsboro-100 hover:bg-silver-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
                  <div
                    onClick={handelCilck}
                    className=" Bord text-21xl tracking-[0.16em] font-bord-demo text-white text-center cursor-pointer mq450:text-5xl mq1050:text-13xl"
                  >
                    NexT
                  </div>
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
