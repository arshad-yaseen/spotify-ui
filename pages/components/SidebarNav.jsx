import React, { useEffect, useState } from "react";
import HomeIcon from "../../images/commonicons/homeicon.svg";
import SearchIcon from "../../images/commonicons/searchicon.svg";
import LibraryIcon from "../../images/commonicons/libraryicon.svg";
import HomeIconActive from "../../images/commonicons/homeiconactive.svg";
import SearchIconActive from "../../images/commonicons/searchiconactive.svg";
import LibraryIconActive from "../../images/commonicons/libraryiconactive.svg";
import PlusIcon from "../../images/commonicons/plusicon.svg";
import HeartIcon from "../../images/commonicons/hearticon.svg";
import SaveIconGreen from "../../images/commonicons/saveicongreen.svg";
import DownloadIcon from "../../images/commonicons/downloadicon.svg";
import Image from "next/image";
import Link from "next/link";

function SidebarNav() {
  const [activeNav, setActiveNav] = useState("home");

  useEffect(()=> {
    setActiveNav(window.location.pathname === "/search" ? "search" : "home")
  },[])

  const handleNavClick = (navName) => {
    setActiveNav(navName);
  };

  const renderNavItem = (navName, iconSrc, activeIconSrc, label) => {
    const isActive = activeNav === navName;

    return (
      <Link
      href={navName === "search" ? "/search" : "/"}
        className={`w-full h-full flex items-center pl-6 font-medium text-sm hover:text-white transition-colors cursor-pointer ${
          isActive ? "text-white" : "text-[#B3B3B3]"
        }`}
        onClick={() => handleNavClick(navName)}
      >
        <Image
          className="mr-4"
          src={isActive ? activeIconSrc : iconSrc}
          alt={`${label} Icon`}
          height={25}
          width={25}
          priority={true}
        />
        {label}
      </Link>
      
    );
  };

  const renderSecondaryNavItem = (navName, iconSrc, label, first = false) => {
    const isActive = activeNav === navName;

    return (
      <div
        className={`w-full h-full ${
          first ? "mt-7" : "mt-1"
        } flex items-center pl-6 font-medium text-sm hover:text-white transition-colors cursor-pointer ${
          isActive ? "text-white" : "text-[#B3B3B3] secondary-nav-wrapper"
        }`}
        onClick={() => handleNavClick(navName)}
      >
        <div
          className={`w-7 h-7 mr-4 ${
            navName === "create_playlist"
              ? "bg-[#B2B3B3]"
              : navName === "liked_songs"
              ? "bg-gradient-to-br from-[#4C1BF3] to-white"
              : navName === "downloaded"
              ? "bg-gradient-to-br from-blue-700 to-white"
              : navName === "your_episodes"
              ? "bg-green-900"
              : ""
          }  flex items-center justify-center rounded-sm secondary-nav transition-opacity ${
            isActive ? "opacity-100" : "opacity-70"
          } `}
        >
          <Image
            src={iconSrc}
            alt={`${label} Icon`}
            height={
              navName === "create_playlist"
                ? 13
                : navName === "liked_songs"
                ? 13
                : 17
            }
            width={
              navName === "create_playlist"
                ? 13
                : navName === "liked_songs"
                ? 13
                : 17
            }
            priority={true}
          />
        </div>
        {label}
      </div>
    );
  };

  return (
    <div className="h-[20rem] w-full  flex flex-col">
      {renderNavItem("home", HomeIcon, HomeIconActive, "Home")}
      {renderNavItem("search", SearchIcon, SearchIconActive, "Search")}
      {renderNavItem(
        "library",
        LibraryIcon,
        LibraryIconActive,
        "Your Library"
      )}

      {renderSecondaryNavItem(
        "create_playlist",
        PlusIcon,
        "Create Playlist",
        true
      )}

      {renderSecondaryNavItem("liked_songs", HeartIcon, "Liked Songs")}

      {renderSecondaryNavItem(
        "your_episodes",
        SaveIconGreen,
        "Your Episodes"
      )}

      {renderSecondaryNavItem(
        "downloaded",
        DownloadIcon,
        "Downloaded Songs"
      )}
    </div>
  );
}

export default SidebarNav;
