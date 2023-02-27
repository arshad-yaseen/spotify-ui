import Image from "next/image";
import React, { useEffect, useState } from "react";
import DummyProfile from "../../images/commonimages/dummyprofile.jpeg";
import { changeHeaderBackgroundColor, playPauseAction } from "../../lib/tools";
import PlayIcon from "../../images/commonicons/playicon.svg";
import PauseIcon from "../../images/commonicons/pauseicon.svg";
import SaveGreenIcon from "../../images/commonicons/saveicongreen.svg";
import DummyMusicThumb1 from "../../images/commonimages/dummymusicthumb1.jpeg";
import RoundTickGreenIcon from "../../images/commonicons/roundtickicongreen.svg";

function EpisodesSection() {
  useEffect(() => {
    changeHeaderBackgroundColor("#072821");
  }, []);

  let [episodes, setEpisodes] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

  const isProduction = process.env.NODE_ENV !== "development";

  return (
    <div className="w-full  relative ">
      <div className="w-full h-[340px]   z-50 absolute top-0 flex items-center pl-10">
        <div className="w-[230px] shadow-lg shadow-black/20 h-[230px] mt-16 bg-gradient-to-b bg-[#056852] rounded-md flex items-center justify-center">
          <Image
            src={SaveGreenIcon}
            alt={`Heart Icon`}
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
            <h1 className="ml-2 text-white hover:underline font-book text-sm cursor-pointer">
              Arshad Yaseen
            </h1>
            <span className="mx-2 text-white text-2xl">·</span>
            <h1 className=" text-white  font-book text-sm cursor-default">
              19 episodes
            </h1>
          </div>
        </div>
      </div>

      <div className="w-[120%] z-10 relative -ml-[20%] h-[750px] bg-gradient-to-b -mt-[10%] from-[#0B6250] via-[#0B6250]/80 to-black blur-2xl"></div>

      <div className="w-full h-[400px]  z-50 pr-16 relative bg-gradient-to-b -mt-[24%] from-black/20 via-[#121313] to-[#121313] pl-10">
        <div className="h-28 w-full  flex justify-start items-center">
          <div className="w-14 h-14 bg-hover hover:scale-105 rounded-full flex items-center justify-center">
            <Image
              src={PlayIcon}
              id="collection_playbutton"
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

        <div className="w-full h-full flex flex-col ">
          {episodes.map((episode, index) => {
            return (
              <div className="w-[85%] min-h-[200px] border-t-2 relative hover:bg-[#2B2928]/50 rounded-md hover:border-transparent border-t-[#202120] flex cursor-pointer">
                <div className="w-[180px] h-full p-4">
                  <Image
                    src={DummyMusicThumb1}
                    priority={true}
                    alt="dummy music thumb"
                    className="w-full h-fit rounded-md"
                  />
                </div>
                <div className="w-full h-full flex flex-col py-4 px-4 relative">
                  <h1
                    id={"collection_" + index}
                    className="text-white text-md hover:underline font-bold"
                  >
                    Sanchariyude Dairy Kurippukal By Santosh George Kulangara
                    Malayalam Podcast | Safari TV
                  </h1>
                  <p
                    id={"collection_show_" + index}
                    className="text-white hover:underline font-bold text-sm mt-1"
                  >
                    Info Records Malayalam
                  </p>
                  <p className="text-[#B3B2B2] font-book  text-sm mt-3">
                    The History Of Taliban Is Explained As A Story Teller In
                    Vallathoru Kadha in Asianet News
                  </p>
                  <div className="w-full h-[75px]  absolute bottom-0 items-center flex ">
                    <div className="w-8 h-8 bg-white hover:scale-105 rounded-full flex items-center justify-center">
                      <Image
                        src={PlayIcon}
                        id="collection_playbutton"
                        className={`collection_playbutton_${index}`}
                        onClick={(e) => {
                          for (let i = 0; i < episodes.length; i++) {
                            document
                              .getElementById(`collection_${i}`)
                              .classList.replace("text-hover", "text-white");
                            document
                              .getElementById(`collection_show_${i}`)
                              .classList.replace("text-hover", "text-white");
                            document.querySelector(
                              `.collection_playbutton_${i}`
                            ).src = PlayIcon.src;
                          }

                          document
                            .getElementById(`collection_${index}`)
                            .classList.replace("text-white", "text-hover");
                          document
                            .getElementById(`collection_show_${index}`)
                            .classList.replace("text-white", "text-hover");

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
                        height={17}
                      />
                    </div>

                    <p className="text-[#9A9A9B] font-book  text-sm ml-6">
                      June 2021
                    </p>
                    <span className="mx-2 text-[#9A9A9B] ">·</span>
                    <p className="text-[#9A9A9B] font-book  text-sm ">
                      24 min 14 sec
                    </p>

                    <Image
                      src={RoundTickGreenIcon}
                      alt="round tick icon green"
                      priority={true}
                      className="absolute right-16"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EpisodesSection;
