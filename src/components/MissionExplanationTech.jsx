import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const MissionExplanationTech = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [verses, setVerses] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getVerses = async () => {
      try {
        const response = await axios.get("/api/verses", {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        console.log(response.data);
        if (Array.isArray(response.data)) {
          setVerses(response.data);
          setIsLoading(false);
        } else {
          console.error("Invalid response data format. Expected an array.");
        }
      } catch (err) {
        console.log(err);
      }
    };
    getVerses();
  }, []);
  return (
    <div className="conatiner relative z-[9] w-[1000px] mq1025:w-[750px] m-auto flex flex-col items-center text-center ">
      <div className="titel mq975:text-[24px] Bord m-0 Bord text-inherit tracking-[0.12em] font-inherit text-transparent !bg-clip-text [background:linear-gradient(83.88deg,_#7d26cd,_#e2e2e2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
        <h1 className="text-[55px] lg:text-[35px] mq975:text-[28px]">
          Intro To The mISSIon
        </h1>
      </div>
      <div className="per relative top-[-50px] Segoe text-[28px] lg:text-[20px] mq975:text-[17px] mq975:top-[-20px] text-white">
        <p>Each character explains their part in saving the world.</p>
      </div>
      <div className="verses w-full flex flex-col gap-[50px]">
        {!isLoading ? (
          verses.map((verse) => (
            <Link
              to={`/verses/${verse.id}`}
              key={verse.id}
              className="px-[3px] py-[3px] rounded-6xl bg-gradient-to-r from-[#7D26CD] to-[#E2E2E2]"
            >
              <div className="vers cursor-pointer text-[16px] lg:text-[10px] mq975:text-[8px] text-white Bord px-[10px] py-[10px] [background:linear-gradient(90deg,_#7d26cd,_#171717)] rounded-3xl">
                <h1>{verse.title}</h1>
              </div>
            </Link>
          ))
        ) : (
          <div className="flex items-center justify-center flex-col">
            <p className="text-white Segoe-semi-bold">Loading verses</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
        )}
      </div>
    </div>
  );
};

export default MissionExplanationTech;
