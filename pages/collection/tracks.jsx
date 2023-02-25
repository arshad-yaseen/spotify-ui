import Head from "next/head";
import React from "react";
import SideNav from "../components/SideNav";
import SpotifyGreenIcon from "../../images/icons/Spotify_Icon_RGB_Green.png";
import HomeSection from "../components/HomeSection";

function Tracks() {
  return (
    <div className="flex w-full h-screen overflow-scroll" >
      <Head>
        <title>Spotify - Liked Songs</title>
        <link rel="icon" href={SpotifyGreenIcon.src} />
      </Head>

      <SideNav />
      <HomeSection />
      
    </div>
  );
}

export default Tracks;
