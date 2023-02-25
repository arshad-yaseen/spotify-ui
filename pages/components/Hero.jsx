import React, { useState, useEffect } from "react";
import Image from "next/image";
import LeftArrow from "../../images/commonicons/leftarrow.svg";
import RightArrow from "../../images/commonicons/rightarrow.svg";
import DummyProfile from "../../images/commonimages/dummyprofile.jpeg";
import DownArrow from "../../images/commonicons/downarrow.svg";
import DummyMusicThumb1 from "../../images/commonimages/dummymusicthumb1.jpeg";
import DummyMusicThumb2 from "../../images/commonimages/dummymusicthumb2.jpeg";
import DummyMusicThumb3 from "../../images/commonimages/dummymusicthumb3.jpeg";
import DummyMusicThumb4 from "../../images/commonimages/dummymusicthumb4.jpeg";
import DummyMusicThumb5 from "../../images/commonimages/dummymusicthumb5.jpeg";
import DummyMusicThumb6 from "../../images/commonimages/dummymusicthumb6.jpeg";
import PlayIcon from "../../images/commonicons/playicon.svg";
import PauseIcon from "../../images/commonicons/pauseicon.svg";
import { playPauseAction } from "../../lib/tools";

function Hero() {
  let [averageColor, setAverageColor] = useState("");
  

  // Define the greeting message based on the current time of the day
  useEffect(() => {

    let greetingMessage;

    let currentHour = new Date().getHours()

    if (currentHour >= 5 && currentHour < 12) {
      greetingMessage = "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      greetingMessage = "Good afternoon";
    } else {
      greetingMessage = "Good evening";
    }

    const greetingShowElem = document.getElementById("greeting-elem");
    greetingShowElem.textContent = greetingMessage;
  }, []);

  function getImageAverageColor(imageSrc) {
    const img = new window.Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSrc;

    img.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      ).data;
      let r = 0,
        g = 0,
        b = 0;

      for (let i = 0; i < imageData.length; i += 4) {
        r += imageData[i];
        g += imageData[i + 1];
        b += imageData[i + 2];
      }

      r = Math.round(r / (imageData.length / 4));
      g = Math.round(g / (imageData.length / 4));
      b = Math.round(b / (imageData.length / 4));

      // calculate the luminance of the color
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

      // calculate the amount to adjust the color by
      const adjustment = Math.round((128 - luminance) * 0);

      // adjust each color component by the same amount
      r = Math.max(0, Math.min(255, r - adjustment));
      g = Math.max(0, Math.min(255, g - adjustment));
      b = Math.max(0, Math.min(255, b - adjustment));

      // convert the RGB color values to a RGBA value with 50% transparency
      const rgba = `rgba(${r}, ${g}, ${b}, 0.7)`;

      const hero_gradient = document.getElementById("hero_gradient");
      const classes = hero_gradient.classList;
      for (let i = 0; i < classes.length; i++) {
        if (classes[i].startsWith("bg")) {
          hero_gradient.classList.remove(classes[i]);
        }
      }
      setAverageColor(rgba);
      hero_gradient.style.backgroundColor = rgba;
    };
  }

  //   Changing the header background color
  useEffect(() => {
    const home_section = document.getElementById("home_section");
    if (home_section.scrollTop > 105) {
      document.getElementById("home_header").style.backgroundColor =
        averageColor.replace(/,\s*0?\.\d+\s*\)/, ", 1)");
      document.getElementById("home_header").classList.add("brightness-[0.5]");
    }

    home_section.addEventListener("scroll", function () {
      if (home_section.scrollTop > 105) {
        document.getElementById("home_header").style.backgroundColor =
          averageColor.replace(/,\s*0?\.\d+\s*\)/, ", 1)");
        document
          .getElementById("home_header")
          .classList.add("brightness-[0.5]");
      } else {
        document.getElementById("home_header").style.backgroundColor =
          "transparent";
        document
          .getElementById("home_header")
          .classList.remove("brightness-[0.5]");
      }
    });
  }, [averageColor]);

  const heroMusicDatas = [
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

  useEffect(() => {
    getImageAverageColor(heroMusicDatas[0].thumbnail.src);
  }, []);

  

  return (
    <div id="hero" className={`h-[350px] w-full  relative mb-8`}>
      <div
        id="hero_gradient"
        className="w-full brightness-[0.7] transition-colors duration-700  z-10 h-full absolute  blur-3xl -mt-[10%] -ml-[10%]"
      ></div>
      <header
        id="home_header"
        className="w-[83%]  z-[100]   h-16 fixed  right-0 top-0 px-8   flex items-center"
      >
        <div className="h-full z-50 w-20  flex justify-between items-center">
          <div className="h-8 w-8 cursor-pointer bg-black/50 rounded-full flex items-center justify-center">
            <Image src={LeftArrow} alt="left arrow" priority={true} />
          </div>
          <div className="h-8 w-8 cursor-pointer bg-black/50 rounded-full flex items-center justify-center">
            <Image src={RightArrow} alt="right arrow" priority={true} />
          </div>
        </div>
        <div className=" h-9 z-50 bg-black absolute right-8 cursor-pointer hover:bg-[#282828] rounded-full flex items-center">
          <Image
            src={DummyProfile}
            alt="header profile image"
            priority={true}
            height={25}
            width={25}
            className="rounded-full ml-2"
          />
          <p className="font-medium text-white mx-4 text-sm">Arshad Yaseen</p>
          <Image
            className=" mr-4"
            src={DownArrow}
            alt="down arrow"
            priority={true}
          />
        </div>
      </header>
      <div className="px-8 mt-20">
        <div className="w-full z-50 h-6 mb-4 mt-4 text-white text-3xl flex items-center">
          <h1 id="greeting-elem" className="z-50"></h1>
        </div>
        <div className="w-full z-50 h-[180px] flex flex-wrap ">
          {heroMusicDatas.map((data, index) => {
            return (
              <div
                key={data.name}
                onMouseEnter={() => getImageAverageColor(data.thumbnail.src)}
                onMouseLeave={() =>
                  getImageAverageColor(heroMusicDatas[0].thumbnail.src)
                }
                className="w-[31%] z-50 music-card shadow-lg shadow-black/10 bg-opacity-40 cursor-pointer flex items-center h-[45%] mr-4 my-2 bg-[#313030] hover:bg-[#4a4a47] transition-colors rounded-sm relative"
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
                    onClick={(e)=> playPauseAction(e,PlayIcon,PauseIcon)}
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
