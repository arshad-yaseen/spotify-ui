import Head from "next/head";
import React from "react";
import HomeSection from "./components/HomeSection";
import PlayerSection from "./components/PlayerSection";
import SideNav from "./components/SideNav";
import SpotifyGreenIcon from "../images/icons/Spotify_Icon_RGB_Green.png";

function search() {
  return (
    <div className="flex w-full h-screen overflow-scroll" >
      <Head>
        <title>Spotify - Search</title>
        <link rel="icon" href={SpotifyGreenIcon.src} />
      </Head>

      <SideNav />
      <HomeSection />
      
    </div>
  );
}

export default search;
