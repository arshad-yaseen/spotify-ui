import React from "react";
import DummyMusicThumb1 from "../../images/commonimages/dummymusicthumb1.jpeg";
import DummyMusicThumb2 from "../../images/commonimages/dummymusicthumb2.jpeg";
import DummyMusicThumb3 from "../../images/commonimages/dummymusicthumb3.jpeg";
import DummyMusicThumb4 from "../../images/commonimages/dummymusicthumb4.jpeg";
import DummyMusicThumb5 from "../../images/commonimages/dummymusicthumb5.jpeg";
import PlayIcon from "../../images/commonicons/playicon.svg";
import PauseIcon from "../../images/commonicons/pauseicon.svg";
import Image from "next/image";
import { playPauseAction } from "../../lib/tools";

function Section({ section_name, rounded = false, play_button = true }) {
  const Data = [
    {
      thumbnail: DummyMusicThumb2,
      title: "Muhammed al muqit",
      description: "Middle age - Kamala Das Middle age",
    },
    {
      thumbnail: DummyMusicThumb3,
      title: "Jiske aane se muqammal wefwef",
      description: "Real love story 32 || Episodes",
    },
    {
      thumbnail: DummyMusicThumb4,
      title: "Ullinullil manju",
      description: "Middle age - Kamala Das Middle age",
    },
    {
      thumbnail: DummyMusicThumb1,
      title: "Jamalul wujud",
      description: "Middle age - Kamala Das Middle age",
    },
    {
      thumbnail: DummyMusicThumb5,
      title: "Tahayya",
      description: "Middle age - Kamala Das Middle age",
    },
  ];

  return (
    <div className="w-full h-[22rem] flex flex-col mt-4 px-8">
      <header className="w-full mt-3">
        <h1 className="text-2xl text-white">{section_name}</h1>
      </header>
      <div className="s-full h-full py-4 flex ">
        {Data.map((data) => {
          return (
            <div key={data.title} className="w-[20%] music-card overflow-hidden h-full rounded-lg flex flex-col px-2 bg-[#181919] hover:bg-[#292928] transition-colors cursor-pointer mr-6 pt-2">
              <div className="w-full h-[70%]  rounded-lg p-1 relative">
                <Image
                  className={`h-full ${rounded ? "rounded-full" : "rounded-lg"}`}
                  src={data.thumbnail}
                  alt={data.title}
                  priority={true}
                />
                {
                    play_button !== false ?
                    <button className="h-12 shadow-lg shadow-black/50 flex items-center translate-y-[10px] opacity-0 transition-all duration-300 card-play-button justify-center w-12 bg-[#1DDF62] rounded-full absolute right-4 bottom-4">
                    <Image
                      src={PlayIcon}
                      onClick={(e)=> playPauseAction(e,PlayIcon,PauseIcon)}
                      height={19}
                      width={19}
                      alt="play icon black"
                      className="play_button"
                    />
                  </button>
                  : ""
                }
               
              </div>
              <div className="max-w-full h-full flex flex-col py-3 px-2">
                <h1 className="text-white font-book  overflow-hidden whitespace-nowrap text-ellipsis" >{data.title}</h1>
                <p className="text-[#B3B3B3] text-xs mt-2 font-book  overflow-hidden whitespace-nowrap text-ellipsis" >{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section;
