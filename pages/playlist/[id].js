import { useRouter } from 'next/router'
import React from 'react'
import Head from "next/head";
import SideNav from "../components/SideNav";
import SpotifyGreenIcon from "../../images/icons/Spotify_Icon_RGB_Green.png";
import HomeSection from "../components/HomeSection";


function Playlist() {
    let router = useRouter()
    let { id } = router.query

  return (
    <div className="flex w-full h-screen overflow-scroll" >
    <Head>
      <title>Spotify - Playlist</title>
      <link rel="icon" href={SpotifyGreenIcon.src} />
    </Head>

    <SideNav />
    <HomeSection />
    
  </div>
  )
}

export default Playlist

