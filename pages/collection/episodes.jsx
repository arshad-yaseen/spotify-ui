import Head from "next/head";
import React from "react";
import SideNav from "../components/SideNav";
import SpotifyGreenIcon from "../../images/icons/Spotify_Icon_RGB_Green.png";
import HomeSection from "../components/HomeSection";

function Episodes() {
  return (
    <div className="flex w-full h-screen overflow-scroll" >
      <Head>
        <title>Spotify - Your Episodes</title>
        <link rel="icon" href={SpotifyGreenIcon.src} />
      </Head>

      <SideNav />
      <HomeSection />
      
    </div>
  );
}

export default Episodes;
