import React from "react";
import Header from "../components/Header";
import bgimage from "../public/images/background.png";
import LogoutButton from "../components/LogoutButton";
import Logout from "../components/Logout";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const ChallengePage = (props) => {
  const [challenge, setChallenge] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let location = useLocation();
  let [searchParameters] = useSearchParams();
  const verseId = searchParameters.get("verse");
  useEffect(() => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.documentElement.scrollTop = 0;
    }
  }, []);
  const token = Cookies.get("token");
  const { id } = useParams();
  useEffect(() => {
    const getChallenge = async () => {
      try {
        const response = await axios.get(`/api/verse/2/challenges/${id}`, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        setChallenge(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getChallenge();
  }, [id, verseId]);

  if (isLoading)
    return (
      <div className="w-full h-full flex items-center justify-center bg-cover min-h-screen bg-gray-100">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          {...props}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#7D26CD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={"animate-spin"}
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </div>
    );
  return (
    <div
      style={{ backgroundImage: `url("${bgimage}")` }}
      className="w-full h-full bg-no-repeat bg-cover  min-h-screen relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-28 box-border gap-[112px] tracking-[normal] mq450:gap-[28px_112px] mq750:gap-[56px_112px]"
    >
      <Header image={<LogoutButton />} event={<Logout />} />
      <main className="self-stretch flex flex-row items-start justify-center py-0 box-border max-w-full">
        {/* bg card */}
        <div className="w-full max-w-[1200px]  shrink mx-auto flex justify-center">
          <section className="w-[1000px] mq480:w-[350px] z-[5] bg-gradient-to-r from-[#7D26CD] to-[#E2E2E2] px-[4px] py-[4px] bg-blue-600 mx-[20px] rounded-9xl border-solid box-border">
            <div className="w-full rounded-6xl flex flex-col justify-starth-full pb-[50px] shrink px-[70px] mq480:px-[30px] ok bg-gray-100 items-center text-center text-45xl text-blueviolet-200 box-border mq750:gap-[28px_57px] mq750:pt-[23px] mq750:pb-[50px] mq750:box-border">
              <div className="title Bord mq765:text-[28px] text-inherit font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(83.88deg,_#7d26cd,_#e2e2e2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                <h1 class="text-[3rem] mq480:text-[2rem]">{challenge.title}</h1>
              </div>
              <div className="per text-start text-white Segoe-semi-bold self-stretch h-full text-[26px] mq765:text-[24px] tracking-[0.13em] inline-block shrink mb-[-10px] mq450:text-3xl mq1050:text-10xl">
                <span className=" capitalize text-[#7D26CD]">
                  Challenge script
                </span>
                <p className="mt-3">{challenge.story}</p>
              </div>
              <div className="per text-start text-white Segoe-semi-bold self-stretch h-full text-[26px] mq765:text-[24px] tracking-[0.13em] inline-block shrink mb-[-10px] mq450:text-3xl mq1050:text-10xl">
                <span className=" capitalize text-[#7D26CD]">Difficulty</span>
                <p className="mt-3">{challenge.difficulty}</p>
              </div>
              {/* attached  */}
              <div className=" w-full flex flex-row justify-items-start">
                <div className="attached flex flex-col w-[310px] gap-2 ">
                  <span class="capitalize text-start text-[25px] Segoe-semi-bold self-stretch">
                    attached :{" "}
                  </span>
                  <a
                    href={challenge.files}
                    class="text-[20px] text-start px-6 py-2 bg-[#333333] text-[#5E6EFF] underline capitalize Segoe-semi-bold self-stretch"
                  >
                    file
                  </a>
                </div>
              </div>

              <div className="w-full">
                <div className="flex flex-row justify-start">
                  <p className="text-[25px] mb-[-5px] Segoe-semi-bold self-stretch">
                    Submition format:{" "}
                    <span className="text-white">Link / Key</span>
                  </p>
                </div>
              </div>
              <form
                action=""
                className="flex  flex-col items-center gap-[50px]"
              >
                {props.status}
                <div className="button">
                  <button
                    type="submit"
                    className="cursor-pointer py-3.5 px-5 bg-[transparent] w-[362px] mq750:w-[290px] mq450:w-[180px] rounded-6xl challenge-submit-button box-border overflow-hidden shrink-0 flex flex-row items-start justify-center max-w-full border-[1px] border-solid border-gainsboro-100 hover:bg-silver-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100"
                  >
                    <div className="Bord text-[28px] tracking-[0.16em] text-white text-center cursor-pointer mq450:text-5xl mq750:text-13xl">
                      Submit
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ChallengePage;
