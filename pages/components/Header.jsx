import React, { useEffect, useState } from "react";
import LeftArrow from "../../images/commonicons/leftarrow.svg";
import RightArrow from "../../images/commonicons/rightarrow.svg";
import DummyProfile from "../../images/commonimages/dummyprofile.jpeg";
import Image from "next/image";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import SearchIconBlack from "../../images/commonicons/searchiconblack.svg";
import { useRouter } from "next/router";
import PlayIcon from "../../images/commonicons/playicon.svg";
import PauseIcon from "../../images/commonicons/pauseicon.svg";
import { playPauseAction } from "../../lib/tools";
import { useRecoilValue } from "recoil";
import { searchValue } from "../../atoms/searchAtom";

function Header() {
  let router = useRouter();
  let {id} = router.query
  let [pageTitle,setPageTitle] = useState("")
  let searchQuery = useRecoilValue(searchValue)

  useEffect(() => {
    if(document.getElementById("header_common_thing_playbutton")){
      document.getElementById("header_common_thing_playbutton").src =
      PlayIcon.src;
    }
  }, []);

  useEffect(() => {
    
    setPageTitle(document.title.split(" - ")[1])
    
  }, [router]);

;

  const isProduction = process.env.NODE_ENV !== "development";

  return (
    <header
      id="home_header"
      className="w-[83%] transition-all z-[100] duration-100   h-16 fixed  right-0 top-0 px-8   flex items-center"
    >
      <div className="h-full z-50 w-20  flex justify-between items-center">
        <button
          onClick={() => router.back()}
          className="h-8 w-8  bg-black rounded-full flex items-center justify-center"
        >
          <Image src={LeftArrow} alt="left arrow" priority={true} />
        </button>
        <button className="h-8 w-8 cursor-not-allowed bg-black opacity-50 rounded-full flex items-center justify-center">
          <Image src={RightArrow} alt="right arrow" priority={true} />
        </button>
      </div>

      <div id="common_div" className="h-full px-4 flex items-center">
        {router.pathname.includes("/search") ? (
          <div className="relative">
            <input
            onChange={(e) => {router.push(`/search/${e.target.value}`)}}
              autoFocus
              defaultValue={searchQuery != "" ? searchQuery : ""}
              type="search"
              placeholder="What do you want to listen to?"
              className="outline-none text-[0.940rem] font-book w-[350px] placeholder:text-[#747574] rounded-full py-2 pl-12"
            />
            <Image
              src={SearchIconBlack}
              alt="search icon"
              priority={true}
              className="absolute top-0 h-10 left-3"
            />
          </div>
        ) : router.pathname === "/collection/tracks" ? (
          <div className="flex items-center header_common_thing opacity-0 invisible transition-opacity delay-300 duration-500">
            <div className="w-12 h-12 bg-hover hover:scale-105 rounded-full flex items-center justify-center">
              <Image
                src={PlayIcon}
                id="header_common_thing_playbutton"
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
                height={20}
              />
            </div>
            <h1 className="text-2xl text-white font-bold ml-4">{pageTitle}</h1>
          </div>
        ) : router.pathname === "/collection/episodes" ? (
          <div className="flex items-center header_common_thing opacity-0 invisible transition-opacity delay-300 duration-500">
            <div className="w-12 h-12 bg-hover hover:scale-105 rounded-full flex items-center justify-center">
              <Image
                src={PlayIcon}
                id="header_common_thing_playbutton"
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
                height={20}
              />
            </div>
            <h1 className="text-2xl text-white font-bold ml-4">
              {pageTitle}
            </h1>
          </div>
        ) :  router.pathname.includes("/playlist") ? (
          <div className="flex items-center header_common_thing opacity-0 invisible transition-opacity delay-300 duration-500">
            <div className="w-12 h-12 bg-hover hover:scale-105 rounded-full flex items-center justify-center">
              <Image
                src={PlayIcon}
                id="header_common_thing_playbutton"
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
                      .getElementById(`${id}_soundicon`)
                      .classList.replace("opacity-0", "opacity-100");
                  } else {
                    document
                      .getElementById(`${id}_soundicon`)
                      .classList.replace("opacity-100", "opacity-0");
                  }
                }}
                alt="play icon green"
                priority={true}
                height={20}
              />
            </div>
            <h1 className="text-2xl text-white font-bold ml-4">
              {pageTitle}
            </h1>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className=" h-9 z-50 bg-black absolute right-8 cursor-pointer  rounded-full flex items-center">
        <Image
          src={DummyProfile}
          alt="header profile image"
          priority={true}
          height={25}
          width={25}
          className="rounded-full ml-2"
        />
        <p className="font-medium text-white mx-4 text-sm">Arshad Yaseen</p>
        <Menu>
          <MenuButton
            bg="transparent"
            _active
            color="white"
            _hover
            as={Button}
            rightIcon={<TriangleDownIcon />}
          />
          <MenuList rounded="md" bg="#282828" shadow="xl" border="none" color="white">
            <MenuItem
              _hover={{ backgroundColor: "#3F3D3C" }}
              bg="#292928"
              opacity="0.8"
              className="font-book text-sm"
            >
              Profile
            </MenuItem>
            <MenuItem
              _hover={{ backgroundColor: "#3F3D3C" }}
              bg="#292928"
              opacity="0.8"
              className="font-book text-sm"
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </header>
  );
}

export default Header;
