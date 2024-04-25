import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import bgimage from "../public/images/background.png";
import "../fonts/bord-demo/Bord.otf";
import LoginButton from "../components/LoginButton";
import Login from "../components/Login";
import { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.documentElement.scrollTop = 0;
    }
  });
  return (
    <>
      <Header image={<LoginButton />} event={<Login />} />
      <div
        style={{ backgroundImage: `url("${bgimage}")` }}
        className="w-full bg-no-repeat bg-cover h-full min-h-screen relative bg-gray-100 flex object-cover flex-col items-start justify-start pt-0 px-0 box-border tracking-[normal] mq450:gap-[28px_112px] px-[20px] mq975:gap-[56px_112px]"
      >
        <div className="bg-gradient-to-r mt-[50px] from-[#7D26CD] to-[#E2E2E2] px-[5px] py-[5px] rounded-6xl self-stretch flex flex-row items-start justify-center py-0 px-10 box-border w-[1024px] mx-auto max-w-full">
          <section className="w-full flex flex-col items-end justify-start gap-[30px] max-w-full text-center text-[40px] text-white font-bord-demo">
            <div className="self-stretch rounded-9xl bg-gray-100 box-border overflow-hidden flex flex-col items-center justify-start pt-4 px-5 max-w-full z-[1]  mq700:gap-[22px_89.5px] mq700:pt-5 mq700:pb-10 mq700:box-border mq975:gap-[45px_89.5px]">
              <LoginForm />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
