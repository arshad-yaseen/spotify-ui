import Image from "next/image";
import React, { useEffect } from "react";
import SaveGreenIcon from "../../images/commonicons/saveicongreen.svg";
import DummyProfile from "../../images/commonimages/dummyprofile.jpeg";
import { changeHeaderBackgroundColor, playPauseAction } from "../../lib/tools";
import PlayIcon from "../../images/commonicons/playicon.svg";
import PauseIcon from "../../images/commonicons/pauseicon.svg";

function EpisodesSection() {
  useEffect(() => {
    changeHeaderBackgroundColor("#190E3C", 20);
  }, []);

  const isProduction = process.env.NODE_ENV !== "development";

  return (
    <div className="w-full  h-[420vh] relative">
      <div className="w-full h-[340px]  z-50 absolute top-0 flex items-center pl-10">
        <div className="w-[230px] h-[230px] mt-16 bg-[#046853] flex items-center justify-center">
          <Image
            src={SaveGreenIcon}
            alt={`Save Icon`}
            height={60}
            width={60}
            priority={true}
          />
        </div>
        <div className="w-auto h-[230px] mt-16 ml-6 flex flex-col justify-end">
          <h1 className="text-white uppercase text-xs font-bold">playlist</h1>
          <h1 className="text-white text-[5.5rem] font-black">Your Episodes</h1>
          <div className="flex items-center">
            <Image
              src={DummyProfile}
              alt={`Heart Icon`}
              height={25}
              width={25}
              priority={true}
              className="rounded-full"
            />
            <h1 className="ml-2 text-white hover:underline font-medium text-sm cursor-pointer">
              Arshad Yaseen
            </h1>
            <span className="mx-2 text-white text-2xl">·</span>
            <h1 className=" text-white hover:underline font-medium text-sm cursor-pointer">
              19 episodes
            </h1>
          </div>
        </div>
      </div>

      <div className="w-[120%] z-10 relative -ml-[10%] h-[650px] bg-gradient-to-b -mt-[10%] from-[#09624F] via-[#09624F]/70  blur-2xl"></div>

      <div className="w-full h-[400px] z-50 relative bg-gradient-to-b -mt-[16%] from-black/20 via-[#121313] to-[#121313] pl-10">
        <div className="h-28 w-full flex justify-start items-center">
          <div className="w-14 h-14 bg-hover hover:scale-105 rounded-full flex items-center justify-center">
            <Image
              src={PlayIcon}
              onClick={(e) => {
                playPauseAction(e.target, PlayIcon, PauseIcon);
                if (
                  e.target.src.replace(
                    isProduction
                      ? process.env.NEXT_PUBLIC_BASE_PROD_URL
                      : process.env.NEXT_PUBLIC_BASE_DEV_URL,
                    ""
                  ) !== PlayIcon.src
                ) {
                  document
                    .getElementById("your_episodes_soundicon")
                    .classList.replace("opacity-0", "opacity-100");
                } else {
                  document
                    .getElementById("your_episodes_soundicon")
                    .classList.replace("opacity-100", "opacity-0");
                }
              }}
              alt="play icon green"
              priority={true}
              height={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EpisodesSection;
