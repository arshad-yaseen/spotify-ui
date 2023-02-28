import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { searchValue } from "../../atoms/searchAtom";
import DummyMusicThumb from "../../images/commonimages/dummymusicthumb4.jpeg";
import PlayIcon from "../../images/commonicons/playicon.svg";
import PauseIcon from "../../images/commonicons/pauseicon.svg";
import { changeHeaderBackgroundColor, playPauseAction } from "../../lib/tools";
import PlayIconWhite from "../../images/commonicons/playiconwhite.svg";
import PauseIconWhite from "../../images/commonicons/pauseiconwhite.svg";
import HeartIconGreen from "../../images/commonicons/hearticongreen.svg";
import HeartOutlineIcon from "../../images/commonicons/heartoutlineicon.svg";
import Section from "./Section";

function SearchResult() {
  let [searchQuery, setSearchQuery] = useRecoilState(searchValue);
  let router = useRouter();
  let search_query = router.query.search_query;

  const isProduction = process.env.NODE_ENV !== "development";

  useEffect(() => {
    changeHeaderBackgroundColor("#070606", 30);
  }, []);

  useEffect(() => {
    setSearchQuery(search_query);
  }, [search_query]);

  let [songs, setSongs] = useState([1, 1, 1, 1]);

  return (
    <div  className="w-full h-[420vh]  mt-20">
      <div className="w-full h-[310px]  flex">
        <div className="w-[45%] h-full flex flex-col px-10 pb-4">
          <h1 className="text-white text-2xl font-bold mt-2">Top Result</h1>
          <div className="h-full bg-[#191918] hover:bg-[#282828] relative music-card transition-colors cursor-pointer rounded-md w-full mt-6 p-5">
            <Image
              src={DummyMusicThumb}
              alt="dummy music thumb"
              priority={true}
              height={90}
              className="rounded-md shadow-lg shadow-black/30"
            />
            <h1 className="text-3xl text-white overflow-hidden whitespace-nowrap text-ellipsis font-bold tracking-tighter mt-6">
              Unakkul Naane
            </h1>
            <div className="flex mt-4 items-center">
              <p className="text-[#B3B2B2] text-sm">
                <span className="font-book">Pritt</span>
                <span className="mr-1">,</span>
                <span className="font-book">dilushselva</span>
              </p>
              <p className="text-white ml-3 text-sm py-1.5 rounded-full px-4 bg-[#131212]">
                Song
              </p>
            </div>
            <button className="h-12 shadow-lg shadow-black/50 flex items-center translate-y-[10px] opacity-0 transition-all duration-300 card-play-button justify-center w-12 bg-[#1DDF62] rounded-full absolute right-6 bottom-6">
              <Image
                src={PlayIcon}
                onClick={(e) => playPauseAction(e.target, PlayIcon, PauseIcon)}
                height={19}
                width={19}
                alt="play icon black"
                className="play_button"
              />
            </button>
          </div>
        </div>
        <div className="w-[55%] h-full flex flex-col pr-10 pb-4 ">
          <h1 className="text-white text-2xl font-bold mt-2">Songs</h1>
          <div className="h-full rounded-md w-full mt-6 flex flex-col">
            {songs.map((item, index) => {
              return (
                <div
                  key={index * 1666}
                  id={`songs_wrapper_${index}`}
                  onMouseEnter={() => {
                    document
                      .getElementById(`song_playbutton_${index}`)
                      .classList.replace("invisible", "visible");
                    document
                      .getElementById(`playlist_heart_button_${index}`)
                      .classList.replace("invisible", "visible");
                  }}
                  onMouseLeave={() => {
                    document
                      .getElementById(`song_playbutton_${index}`)
                      .classList.replace("visible", "invisible");
                    document
                      .getElementById(`playlist_heart_button_${index}`)
                      .classList.replace("visible", "invisible");
                  }}
                  className="w-full h-[60px] pr-6 pl-3  rounded-md hover:bg-[#2C2B30]/70 relative   flex items-center py-5"
                >
                  <div className="w-full h-full flex items-center ">
                    <Image
                      src={PlayIconWhite}
                      className="absolute invisible ml-3 "
                      id={`song_playbutton_${index}`}
                      onClick={(e) => {
                        for (let i = 0; i < songs.length; i++) {
                          document.getElementById(`song_playbutton_${i}`).src =
                            PlayIconWhite.src;
                          document
                            .getElementById(`songs_wrapper_${i}`)
                            .classList.remove("bg-[#2C2B30]/70");
                        }

                        playPauseAction(
                          e.target,
                          PlayIconWhite,
                          PauseIconWhite,
                          PlayIcon,
                          PauseIcon
                        );

                        for (let i = 0; i < songs.length; i++) {
                          document
                            .getElementById(`song_title_${i}`)
                            .classList.replace("text-hover", "text-white");
                        }

                        document
                          .getElementById(`song_title_${index}`)
                          .classList.replace("text-white", "text-hover");

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
                            .classList.add("bg-[#2C2B30]/70");
                        } else {
                          document
                            .getElementById(`song_playbutton_${index}`)
                            .classList.add("visible");
                          document
                            .getElementById(`songs_wrapper_${index}`)
                            .classList.remove("bg-[#2C2B30]/70");
                        }
                      }}
                      alt="play icon green"
                      priority={true}
                      height={15}
                    />
                    <Image
                      src={DummyMusicThumb}
                      alt="dumy music thumb"
                      priority={true}
                      height={35}
                    />
                    <div className="w-full h-full flex flex-col justify-center ml-4">
                      <h1
                        id={`song_title_${index}`}
                        className="font-book text-white  cursor-default"
                      >
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
                  <div className="w-[10%] h-full flex items-center justify-end">
                    <Image
                      src={HeartOutlineIcon}
                      onClick={(e) => {
                        if (
                          e.target.src.replace(
                            isProduction
                              ? process.env.NEXT_PUBLIC_BASE_PROD_URL
                              : process.env.NEXT_PUBLIC_BASE_DEV_URL,
                            ""
                          ) !== HeartIconGreen.src
                        ) {
                          e.target.src = HeartIconGreen.src;
                        } else {
                          e.target.src = HeartOutlineIcon.src;
                        }
                      }}
                      alt={`Heart Icon`}
                      height={15}
                      width={15}
                      id={`playlist_heart_button_${index}`}
                      priority={true}
                      className="mr-8 cursor-pointer invisible "
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
      <Section section_name="Artists" rounded hideShowAll={true} />
      <Section section_name="Albums"  hideShowAll={true} />
      <Section section_name="Podcasts" play_button={false}  hideShowAll={true} />
      <Section section_name="Episodes" play_button={false}  hideShowAll={true} />
    </div>
  );
}

export default SearchResult;
