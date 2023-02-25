import React, { useEffect } from "react";
import SpotifyBlackLogo from "../images/logos/Spotify_Logo_RGB_Black.png";
import Image from "next/image";
import { FaSpotify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import SpotifyBlackIcon from "../images/icons/Spotify_Icon_RGB_Black.png";
import Head from "next/head";
import Link from "next/link";

function signup() {
  useEffect(() => {
    document.getElementById("player_section").style.display = "none";
  }, []);

  return (
    <div className="w-full h-full sm:px-8 px-3 flex flex-col items-center">
      <Head>
        <title>Sign up - Spotify</title>
        <link rel="icon" href={SpotifyBlackIcon.src} />
      </Head>

      <header className="w-full flex justify-center items-center mt-10">
        <Image
          src={SpotifyBlackLogo}
          alt="spotify black logo"
          height={40}
          priority={true}
        />
      </header>

      <form className="sm:w-[450px] w-full py-8 flex flex-col items-center justify-center">
        <h1 className="font-bold mt-4 text-3xl tracking-tighter text-center text-dark">
          Sign up for free to start listening.
        </h1>

        <div className="w-full py-8 sm:px-8 px-3 flex flex-col items-center">
          <button
            type="button"
            className="w-full hover:scale-105 transition-transform mt-2 py-3 bg-dark text-white font-medium flex items-center rounded-full justify-center"
          >
            <span className="flex items-center justify-center mr-3">
              <FaSpotify className="text-xl" />
            </span>
            Sign up with Spotify
          </button>
          <button
            type="button"
            className="w-full hover:scale-105 transition-transform py-3 mt-4 border-slate-700 border-2 text-dark font-medium flex items-center bg-white rounded-full justify-center"
          >
            <span className="flex items-center justify-center mr-3">
              <FcGoogle className="text-xl" />
            </span>
            Sign up with Google
          </button>
          <div className="relative w-full flex justify-center mt-8 mb-2 items-center">
            <p className="bg-slate-400 h-[0.05rem] w-full "></p>
            <span className="mx-4 font-book absolute flex justify-center items-center text-slate-400 bg-white  w-14 h-6">
              or
            </span>
          </div>
        </div>

        <div className="w-full  sm:px-8 px-3 flex flex-col items-center">
          <div className="w-full  font-bold flex flex-col">
            <label className="text-sm" htmlFor="email">
              What&apos;s your email?
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email."
              className="font-book outline-none rounded-md border pl-4 py-3 border-slate-500 placeholder:text-slate-500 focus:border-2 transition-all mt-2 focus:border-black "
            />
          </div>

          <div className="w-full mt-8 font-bold flex flex-col">
            <label className="text-sm" htmlFor="confirm_email">
              Confirm your email
            </label>
            <input
              type="email"
              name="confirm_email"
              id="confirm_email"
              placeholder="Enter your email again."
              className="font-book outline-none rounded-md border pl-4 py-3 border-slate-500 placeholder:text-slate-500 focus:border-2 transition-all mt-2 focus:border-black "
            />
          </div>

          <div className="w-full mt-8 font-bold flex flex-col">
            <label className="text-sm" htmlFor="password">
              Create a password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create a password."
              className="font-book outline-none rounded-md border pl-4 py-3 border-slate-500 placeholder:text-slate-500 focus:border-2 transition-all mt-2 focus:border-black "
            />
          </div>

          <div className="w-full mt-8 font-bold flex flex-col">
            <label className="text-sm" htmlFor="password">
              What should we call you?
            </label>
            <input
              type="text"
              name="profile_name"
              id="profile_name"
              placeholder="Enter a profile name."
              className="font-book outline-none rounded-md border pl-4 py-3 border-slate-500 placeholder:text-slate-500 focus:border-2 transition-all mt-2 focus:border-black "
            />
          </div>
        </div>

        <div className="w-full pt-8 pb-3  sm:px-8 px-3 flex flex-col items-center">
          <button
            type="submit"
            className="px-12 text-xl py-3 bg-hover text-dark rounded-full hover:scale-105 transition-transform font-bold"
          >
            Sign up
          </button>
        </div>

        <div className="w-full font-book pt-4 pb-16  flex justify-center">
          Have an account?{" "}
          <Link
            href="/login"
            className="text-primary hover:text-green-400 ml-1.5 underline font-book cursor-pointer transition-colors"
          >
            Log in
          </Link>
          .
        </div>
      </form>
    </div>
  );
}

export default signup;
