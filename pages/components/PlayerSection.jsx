import Image from "next/image";
import React, { useState } from "react";
import DummyMusicThumb from "../../images/commonimages/dummymusicthumb1.jpeg";
import HeartOutlineIcon from "../../images/commonicons/heartoutlineicon.svg";
import HeartIconGreen from "../../images/commonicons/hearticongreen.svg";
import ShuffleIcon from "../../images/commonicons/shuffleicon.svg";
import ShuffleIconGreen from "../../images/commonicons/shuffleicongreen.svg";
import PreviousIcon from "../../images/commonicons/previousicon.svg";
import PlayIcon from "../../images/commonicons/playicon.svg";
import PauseIcon from "../../images/commonicons/pauseicon.svg";
import NextIcon from "../../images/commonicons/nexticon.svg";
import RepeatIcon from "../../images/commonicons/repeaticon.svg";
import RepeatIconGreen from "../../images/commonicons/repeaticongreen.svg";
import LyricsIcon from "../../images/commonicons/lyricsicon.svg";
import QueueIcon from "../../images/commonicons/queueicon.svg";
import SoundIcon from "../../images/commonicons/soundicon.svg";
import FullScreenIcon from "../../images/commonicons/fullscreenicon.svg";

function PlayerSection() {
  let [isLiked, setIsLiked] = useState(false);
  let [isPlaying, setIsPlaying] = useState(false);
  let [isRepeat, setIsRepeat] = useState(false);
  let [isShuffle, setIsShuffle] = useState(false);
  return (
    <div className="h-24 z-[100] bg-[#181919] border-t border-t-[#292928] flex w-full fixed bottom-0 left-0">

      <div className="hidden">
        <audio id="player_audio" src="https://server11.mp3quran.net/a_ahmed/003.mp3"></audio>
      </div>

      <div className="w-[25%] flex h-full px-6 py-4">
        <Image
          src={DummyMusicThumb}
          alt="Dummy music thumb"
          priority={true}
          className="h-full w-fit"
        />
        <div className="w-full h-full flex flex-col justify-center ml-4">
          <h1 className="text-sm font-light text-white hover:underline cursor-pointer">
            The Beauty of Existence
          </h1>
          <h1 className="text-xs text-[#B2B3B2] mt-1">
            <span className="hover:text-white hover:underline cursor-pointer font-light">
              Muhammed Al Muqit
            </span>
            ,
            <span className="hover:text-white hover:underline cursor-pointer font-light ml-1">
              Hamoud Al Qahtani
            </span>
          </h1>
        </div>
        <div className="w-5 flex items-center justify-center">
          {isLiked ? (
            <Image
              onClick={() => setIsLiked(false)}
              src={HeartIconGreen}
              alt="Heart Outline Icon"
              priority={true}
              className="h-4 cursor-pointer fill-green-500  w-4 "
            />
          ) : (
            <Image
              onClick={() => setIsLiked(true)}
              src={HeartOutlineIcon}
              alt="Heart Outline Icon"
              priority={true}
              className=" cursor-pointer opacity-70 hover:opacity-100"
            />
          )}
        </div>
      </div>
      <div className="w-[50%]  flex flex-col h-full pl-6 py-4">
        <div className="h-[65%] w-full flex justify-center items-center ">
          {isShuffle ? (
            <Image
              onClick={() => setIsShuffle(false)}
              src={ShuffleIconGreen}
              alt="shuffle icon green"
              priority={true}
              className=" mx-3"
            />
          ) : (
            <Image
              onClick={() => setIsShuffle(true)}
              src={ShuffleIcon}
              alt="shuffle icon"
              priority={true}
              className="opacity-30 hover:opacity-100 mx-3"
            />
          )}

          <Image
            src={PreviousIcon}
            alt="previous icon"
            priority={true}
            className="opacity-70 hover:opacity-100 mx-3"
          />

            <div
              onClick={() => setIsPlaying(isPlaying ? false : true)}
              className="bg-white h-8 hover:scale-110 rounded-full w-8 p-2 flex items-center justify-center mx-3"
            >
              <Image id="player_section_playicon" src={isPlaying ? PauseIcon : PlayIcon} alt="pause icon green" priority={true} />
            </div>

          <Image
            src={NextIcon}
            alt="next icon"
            priority={true}
            className="opacity-70 hover:opacity-100 mx-3"
          />
          {isRepeat ? (
            <Image
              onClick={() => setIsRepeat(false)}
              src={RepeatIconGreen}
              alt="repeat icon green"
              priority={true}
              className=" mx-3"
            />
          ) : (
            <Image
              onClick={() => setIsRepeat(true)}
              src={RepeatIcon}
              alt="repeat icon"
              priority={true}
              className="opacity-30 hover:opacity-100 mx-3"
            />
          )}
        </div>
        <div className="h-[35%] w-full flex justify-center items-center ">
          <div className="w-[5%] h-full flex items-center justify-center px-2 ">
            <p className="font-light text-xs opacity-50 text-white">0:00</p>
          </div>
          <div className="w-[90%] h-full flex items-center px-2 relative seek">
            <div className="w-full h-1 opacity-50 bg-white rounded-full "></div>
            <div
              id="seek_bar"
              className=" w-[70%] h-[0.20rem] absolute seek_bar  bg-white rounded-full flex items-center justify-end"
            >
              <div className="w-3 h-3 bg-white rounded-full seek_bar_dot opacity-0 absolute -right-25"></div>
            </div>
          </div>
          <div className="w-[5%] h-full flex items-center justify-center px-2 ">
            <p className="font-light text-xs opacity-50 text-white">1:08</p>
          </div>
        </div>
      </div>
      <div className="w-[25%] flex justify-end h-full px-10 py-4">
        <Image
          src={LyricsIcon}
          alt="lyrics icon"
          priority={true}
          className="mx-2 opacity-50 hover:opacity-100"
        />
        <Image
          src={QueueIcon}
          alt="queue icon"
          priority={true}
          className="mx-2 opacity-50 hover:opacity-100"
        />
        <Image
          src={SoundIcon}
          alt="sound icon"
          priority={true}
          className="mx-2 opacity-50 hover:opacity-100"
        />
        <div className="w-[40%] h-full flex items-center px-2 relative sound">
          <div className="w-full h-[0.30rem] relative  bg-[#5F5C5D] rounded-full ">
          <div
            id="sound_bar"
            className=" w-[100%] h-[0.30rem] absolute sound_bar  bg-white rounded-full flex items-center justify-end"
          >
            <div className="w-3 h-3 bg-white rounded-full sound_bar_dot opacity-0 absolute -right-25"></div>
          </div>
          </div>
          
        </div>
        <Image
          src={FullScreenIcon}
          alt="sound icon"
          priority={true}
          className="mx-2 opacity-50 hover:opacity-100"
        />
      </div>
    </div>
  );
}

export default PlayerSection;
