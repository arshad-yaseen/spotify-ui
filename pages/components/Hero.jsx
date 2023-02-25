import React, { useState, useEffect } from "react";
import Image from "next/image";
import LeftArrow from "../../images/commonicons/leftarrow.svg";
import RightArrow from "../../images/commonicons/rightarrow.svg";
import DummyProfile from "../../images/commonimages/dummyprofile.jpeg";
import DummyMusicThumb1 from "../../images/commonimages/dummymusicthumb1.jpeg";
import DummyMusicThumb2 from "../../images/commonimages/dummymusicthumb2.jpeg";
import DummyMusicThumb3 from "../../images/commonimages/dummymusicthumb3.jpeg";
import DummyMusicThumb4 from "../../images/commonimages/dummymusicthumb4.jpeg";
import DummyMusicThumb5 from "../../images/commonimages/dummymusicthumb5.jpeg";
import DummyMusicThumb6 from "../../images/commonimages/dummymusicthumb6.jpeg";
import PlayIcon from "../../images/commonicons/playicon.svg";
import PauseIcon from "../../images/commonicons/pauseicon.svg";
import {
  changeHeaderBackgroundColor,
  getImageAverageColor,
  greetingMessageShow,
  playPauseAction,
} from "../../lib/tools";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

function Hero() {
  const heroMusicData = [
    {
      thumbnail: DummyMusicThumb1,
      name: "Jamalul wujud",
    },
    {
      thumbnail: DummyMusicThumb2,
      name: "Muhammed al muqit",
    },
    {
      thumbnail: DummyMusicThumb3,
      name: "Jiske aane se muqammal",
    },
    {
      thumbnail: DummyMusicThumb4,
      name: "Ullinullil manju",
    },
    {
      thumbnail: DummyMusicThumb5,
      name: "Tahayya",
    },
    {
      thumbnail: DummyMusicThumb6,
      name: "Motivational speech",
    },
  ];

  let [averageColor, setAverageColor] = useState("");

  // Define the greeting message based on the current time of the day
  useEffect(() => {
    greetingMessageShow();
  }, []);

  //   Changing the header background color
  useEffect(() => {
    changeHeaderBackgroundColor(averageColor);
  }, [averageColor]);

  useEffect(() => {
    getImageAverageColor(heroMusicData[0].thumbnail.src, setAverageColor);
  }, []);

  return (
    <div id="hero" className={`h-[350px] w-full  relative mb-8`}>
      <div
        id="hero_gradient"
        className="w-full brightness-[0.7] transition-colors duration-700  z-10 h-full absolute  blur-3xl -mt-[10%] -ml-[10%]"
      ></div>
      
      <div className="px-8 mt-20">
        <div className="w-full z-50 h-6 mb-4 mt-4 text-white text-3xl flex items-center">
          <h1 id="greeting-elem" className="z-50 font-bold"></h1>
        </div>
        <div className="w-full z-50 h-[180px] flex flex-wrap ">
          {heroMusicData.map((data, index) => {
            return (
              <div
                key={data.name}
                onMouseEnter={() =>
                  getImageAverageColor(data.thumbnail.src, setAverageColor)
                }
                onMouseLeave={() =>
                  getImageAverageColor(
                    heroMusicData[0].thumbnail.src,
                    setAverageColor
                  )
                }
                className="w-[31.6%] z-50 music-card shadow-lg shadow-black/10 bg-opacity-40 cursor-pointer flex items-center h-[45%] mr-4 my-2 bg-[#313030] hover:bg-[#4a4a47] transition-colors rounded-sm relative"
              >
                <Image
                  src={data.thumbnail}
                  alt={data.name}
                  priority={true}
                  className="h-full w-fit shadow-lg shadow-black/50"
                />
                <h3 className="text-white font-medium text-md ml-4">
                  {data.name}
                </h3>
                <button className="h-12 shadow-lg shadow-black/50 flex items-center opacity-0  transition-opacity card-play-button justify-center w-12 bg-[#1DDF62] rounded-full absolute right-4">
                  <Image
                    src={PlayIcon}
                    onClick={(e) => playPauseAction(e, PlayIcon, PauseIcon)}
                    height={19}
                    width={19}
                    alt="play pause icon black"
                    className="play_button"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Hero;
