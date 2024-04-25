import React, { useEffect } from "react";
import Header from "../components/Header";
import "../fonts/bord-demo/Bord.otf";
import bgimage from "../public/images/background.png";
import LogoutButton from "../components/LogoutButton";
import Logout from "../components/Logout";

import MissionExplanationTech from "../components/MissionExplanationTech";

const VersesPage = () => {
  useEffect(() => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.documentElement.scrollTop = 0;
    }
  }, []);
  return (
    <div>
      <div
        style={{ backgroundImage: `url("${bgimage}")` }}
        className="w-full bg-no-repeat bg-cover  h-full min-h-screen relative bg-gray-100 flex flex-col items-start justify-start pt-0 px-0 pb-[110px] box-border gap-[20px] tracking-[normal] mq450:gap-[20px_79px] mq750:gap-[39px_79px]"
      >
        <Header image={<LogoutButton />} event={<Logout />} />
        <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <MissionExplanationTech />
        </main>
      </div>
    </div>
  );
};

export default VersesPage;
