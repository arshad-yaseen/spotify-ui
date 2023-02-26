import Image from "next/image";
import React, { useEffect, useState } from "react";
import HeartIcon from "../../images/commonicons/hearticon.svg";
import HeartIconGreen from "../../images/commonicons/hearticongreen.svg";
import DummyProfile from "../../images/commonimages/dummyprofile.jpeg";
import { changeHeaderBackgroundColor, playPauseAction } from "../../lib/tools";
import PlayIcon from "../../images/commonicons/playicon.svg";
import PauseIcon from "../../images/commonicons/pauseicon.svg";
import PlayIconWhite from "../../images/commonicons/playiconwhite.svg";
import PauseIconWhite from "../../images/commonicons/pauseiconwhite.svg";
import { TbClock } from "react-icons/tb";
import DummyMusicThumb1 from "../../images/commonimages/dummymusicthumb1.jpeg";
import HeartOutlineIcon from "../../images/commonicons/heartoutlineicon.svg";

function TracksSection() {
  useEffect(() => {
    changeHeaderBackgroundColor("#190E3C", 20);
  }, []);

  let [tracks, setTracks] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  ]);

  const isProduction = process.env.NODE_ENV !== "development";

  return (
    <div className="w-full  relative ">
      <div className="w-full h-[340px]   z-50 absolute top-0 flex items-center pl-10">
        <div className="w-[230px] h-[230px] mt-16 bg-gradient-to-br from-[#4C1BF3] to-white flex items-center justify-center">
          <Image
            src={HeartIcon}
            alt={`Heart Icon`}
            height={80}
            width={80}
            priority={true}
          />
        </div>
        <div className="w-auto h-[230px] mt-16 ml-6 flex flex-col justify-end">
          <h1 className="text-white uppercase text-xs font-bold">playlist</h1>
          <h1 className="text-white text-[5.5rem] font-black">Liked Songs</h1>
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
              6 songs
            </h1>
          </div>
        </div>
      </div>

      <div className="w-[120%] z-10 relative -ml-[10%] h-[650px] bg-gradient-to-br -mt-[10%] from-[#5629F3]/90 via-[#5629F3]/50 to-black blur-2xl"></div>

      <div className="w-full h-[400px]  z-50 pr-16 relative bg-gradient-to-b -mt-[16%] from-black/20 via-[#121313] to-[#121313] pl-10">
        <div className="h-28 w-full  flex justify-start items-center">
          <div className="w-14 h-14 bg-hover hover:scale-105 rounded-full flex items-center justify-center">
            <Image
              src={PlayIcon}
              id="collection_playbutton"
              onClick={(e) => {
                playPauseAction(e.target, PlayIcon, PauseIcon);
                playPauseAction(
                  document.getElementById("header_common_thing_playbutton"),
                  PlayIcon,
                  PauseIcon
                );

                if (
                  e.target.src.replace(
                    isProduction
                      ? process.env.NEXT_PUBLIC_BASE_PROD_URL
                      : process.env.NEXT_PUBLIC_BASE_DEV_URL,
                    ""
                  ) !== PlayIcon.src
                ) {
                  document
                    .getElementById("liked_songs_soundicon")
                    .classList.replace("opacity-0", "opacity-100");
                } else {
                  document
                    .getElementById("liked_songs_soundicon")
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
          <div className="w-full h-[30px]  border-b px-6 border-b-[#2B2A2B] flex items-center">
            <div className="w-[45%] h-full flex">
              <span className="mr-6 text-white text-sm font-book mb-4 opacity-70">
                #
              </span>
              <h1 className="text-white text-sm font-book mb-4 opacity-70">
                Title
              </h1>
            </div>
            <div className="w-[28%] h-full flex">
              <h1 className="text-white text-sm font-book mb-4 opacity-70">
                Album
              </h1>
            </div>
            <div className="w-[22%] h-full flex">
              <h1 className="text-white text-sm font-book mb-4 opacity-70">
                Date added
              </h1>
            </div>
            <div className="w-[10%] h-full flex justify-end">
              <h1 className="text-white text-xl font-book mb-4 opacity-70">
                <TbClock />
              </h1>
            </div>
          </div>

          {tracks.map((item, index) => {
            return (
              <div
              key={index * 1666}
                id={`songs_wrapper_${index}`}
                onMouseEnter={() => {
                  document
                    .getElementById(`song_playbutton_${index}`)
                    .classList.replace("invisible", "visible");
                  document
                    .getElementById(`song_index_${index}`)
                    .classList.replace("visible", "invisible");
                }}
                onMouseLeave={() => {
                  document
                    .getElementById(`song_playbutton_${index}`)
                    .classList.replace("visible", "invisible");

                  if (
                    document
                      .getElementById(`song_playbutton_${index}`)
                      .src.replace(
                        isProduction
                          ? process.env.NEXT_PUBLIC_BASE_PROD_URL
                          : process.env.NEXT_PUBLIC_BASE_DEV_URL,
                        ""
                      ) === PlayIconWhite.src
                  ) {
                    document
                      .getElementById(`song_index_${index}`)
                      .classList.replace("invisible", "visible");
                  }
                }}
                className="w-full h-[70px] px-6 my-2 rounded-sm hover:bg-[#2C2B30] relative   flex items-center py-5"
              >
                <div className="w-[45%] h-full flex items-center">
                  <span
                    id={`song_index_${index}`}
                    className="mr-6 visible text-white text-lg font-book  opacity-70"
                  >
                    {index + 1}
                  </span>

                  <Image
                    src={PlayIconWhite}
                    className="absolute invisible"
                    id={`song_playbutton_${index}`}
                    onClick={(e) => {
                      for (let i = 0; i < tracks.length; i++) {
                        document.getElementById(`song_playbutton_${i}`).src =
                          PlayIconWhite.src;
                        document
                          .getElementById(`songs_wrapper_${i}`)
                          .classList.remove("bg-[#2C2B30]");
                      }

                      playPauseAction(e.target, PlayIconWhite, PauseIconWhite);

                      playPauseAction(
                        document.getElementById(
                          "header_common_thing_playbutton"
                        ),
                        PlayIcon,
                        PauseIcon
                      );
                      playPauseAction(
                        document.getElementById("collection_playbutton"),
                        PlayIcon,
                        PauseIcon
                      );

                      if (
                        e.target.src.replace(
                          isProduction
                            ? process.env.NEXT_PUBLIC_BASE_PROD_URL
                            : process.env.NEXT_PUBLIC_BASE_DEV_URL,
                          ""
                        ) !== PlayIconWhite.src
                      ) {
                        document
                          .getElementById(`song_playbutton_${index}`)
                          .classList.remove("visible");
                        document
                          .getElementById(`songs_wrapper_${index}`)
                          .classList.add("bg-[#2C2B30]");
                      } else {
                        document
                          .getElementById(`song_playbutton_${index}`)
                          .classList.add("visible");
                        document
                          .getElementById(`songs_wrapper_${index}`)
                          .classList.remove("bg-[#2C2B30]");
                      }

                      if (
                        e.target.src.replace(
                          isProduction
                            ? process.env.NEXT_PUBLIC_BASE_PROD_URL
                            : process.env.NEXT_PUBLIC_BASE_DEV_URL,
                          ""
                        ) !== PlayIconWhite.src
                      ) {
                        document
                          .getElementById("liked_songs_soundicon")
                          .classList.replace("opacity-0", "opacity-100");
                      } else {
                        document
                          .getElementById("liked_songs_soundicon")
                          .classList.replace("opacity-100", "opacity-0");
                      }
                    }}
                    alt="play icon green"
                    priority={true}
                    height={15}
                  />
                  <Image
                    src={DummyMusicThumb1}
                    alt="dumy music thumb"
                    priority={true}
                    className="h-full w-fit"
                  />
                  <div className="w-full h-full flex flex-col justify-center ml-4">
                    <h1 className="font-book text-white  cursor-default">
                      The Beauty Of Existence
                    </h1>
                    <h1 className="text-xs  text-[#B2B3B2] mt-1 ">
                      <span className="hover:text-white hover:underline cursor-pointer font-book">
                        Muhammed Al Muqit
                      </span>
                      ,
                      <span className="hover:text-white hover:underline cursor-pointer font-book ml-1">
                        Hamoud Al Qahtani
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="w-[28%] h-full flex items-center">
                  <h1 className="text-white text-sm font-book opacity-70">
                    The Beauty Of Existence
                  </h1>
                </div>
                <div className="w-[22%] h-full flex items-center">
                  <h1 className="text-white text-sm font-book opacity-70">
                    Jan 20, 2023
                  </h1>
                </div>
                <div className="w-[10%] h-full flex items-center justify-end">
                  <Image
                    src={HeartIconGreen}
                    onClick={(e) => {
                      if (
                        e.target.src.replace(
                          isProduction
                            ? process.env.NEXT_PUBLIC_BASE_PROD_URL
                            : process.env.NEXT_PUBLIC_BASE_DEV_URL,
                          ""
                        ) === HeartIconGreen.src
                      ) {
                        e.target.src = HeartOutlineIcon.src;
                      } else {
                        e.target.src = HeartIconGreen.src;
                      }
                    }}
                    alt={`Heart Icon`}
                    height={15}
                    width={15}
                    priority={true}
                    className="mr-8 cursor-pointer"
                  />
                  <h1 className="text-white text-sm font-book opacity-70">
                    3:01
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TracksSection;
