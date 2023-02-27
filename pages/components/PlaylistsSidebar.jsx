import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SoundIconGreen from "../../images/commonicons/soundicongreen.svg";
import SpotifyGreenIcon from "../../images/icons/Spotify_Icon_RGB_Green.png";

function PlaylistsSidebar() {
  let playlists = [
    {
      name: "Jamalul wujud",
      id: "kj223n23nj4j2n34kj23n4j",
    },
    {
      name: "Coding",
      id: "njln34jl2n2lj3n42l3",
    },
    {
      name: "This Is Ludovico Einaudi",
      id: "n2l3n4l2n34l2n34l2n34",
    },
    {
      name: "Coding Mode",
      id: "lkln23kn4l23n4n2l34",
    },
  ];

  let router = useRouter();
  let { id } = router.query;

  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    playlists
      .filter((playlist) => {
        return playlist.id === id ? playlist : "";
      })
      .map((playlist) => {
        if(playlist != ""){
          setActiveNav(playlist.name);
        }
      });
  }, [router]);

  const handleNavClick = (navName) => {
    setActiveNav(navName);
  };

  return (
    <div className="border-t border-[#282828] w-full h-32 flex flex-col pt-6 mt-6 pl-6 ">
      {playlists
        .filter((playlist) => {
          return playlist.id === id ? playlist : "";
        })
        .map((playlist) => {
          if (playlist != "") {
            return (
              <Head>
                <title>
                  Spotify - {playlist.name}
                </title>
                <link rel="icon" href={SpotifyGreenIcon.src} />
              </Head>
            );
          }
        })}

      <ul className="text-sm ">
        {playlists.map((playlist, index) => {
          let isActive = activeNav === playlist.name;
          return (
            <Link
            href={"/playlist/" + playlist.id}
              onClick={() => {
                handleNavClick(playlist.name);
              }}
              key={index * 82342374892734}
              className={`cursor-pointer font-book my-3 ${
                isActive ? "text-white" : "text-[#B3B3B3]"
              }  hover:text-white relative flex items-center`}
            >
              {playlist.name}
              <Image
                src={SoundIconGreen}
                alt="sound icon green"
                id={playlist.id + "_soundicon"}
                priority={true}
                height={15}
                className="absolute right-6 opacity-0 transition-opacity"
              />
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default PlaylistsSidebar;
