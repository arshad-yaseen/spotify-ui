import Head from "next/head";
import SpotifyGreenIcon from "../images/icons/Spotify_Icon_RGB_Green.png";
import HomeSection from "./components/HomeSection";
import PlayerSection from "./components/PlayerSection";
import SideNav from "./components/SideNav";

export default function Home() {
 

  return (
    <div className="flex w-full h-screen overflow-scroll">
      <Head>
        <title>Spotify - Web Player</title>
        <link rel="icon" href={SpotifyGreenIcon.src} />
      </Head>

      <SideNav />
      <HomeSection />
      <PlayerSection />
    </div>
  );
}
