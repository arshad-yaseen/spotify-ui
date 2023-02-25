import React from 'react'
import SpotifyBlackLogo from "../images/logos/Spotify_Logo_RGB_Black.png";
import Image from "next/image";
import { FaApple, FaSpotify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import SpotifyBlackIcon from "../images/icons/Spotify_Icon_RGB_Black.png";
import Head from "next/head";
import Link from "next/link"

function login() {
  return (
    <div className="w-full h-full sm:px-8 px-3 flex flex-col items-center">
      <Head>
        <title>Login - Spotify</title>
        <link rel="icon" href={SpotifyBlackIcon.src} />
      </Head>

      <header className="w-full flex justify-center items-center py-6 border-b">
        <Image
          src={SpotifyBlackLogo}
          alt="spotify black logo"
          height={37}
          priority={true}
        />
      </header>

      <form className="sm:w-[450px] w-full py-8 flex flex-col items-center justify-center">
        <h1 className="font-bold  text-md tracking-tighter text-center text-dark">
        To continue, log in to Spotify.
        </h1>

        <div className="w-full py-3 sm:px-8 px-3 flex flex-col items-center">
          <button
            type="button"
            className="w-full hover:scale-105 transition-transform mt-2 uppercase py-3 bg-dark text-white font-medium flex items-center rounded-full justify-center"
          >
            <span className="flex items-center justify-center mr-3">
              <FaSpotify className="text-xl" />
            </span>
            Continue with Spotify
          </button>
          <button
            type="button"
            className="w-full hover:scale-105 transition-transform py-3 mt-4 border border-slate-500 uppercase text-slate-500  font-medium flex items-center bg-white rounded-full justify-center"
          >
            <span className="flex items-center justify-center mr-3">
              <FcGoogle className="text-xl" />
            </span>
            Continue with Google
          </button>
          <button
            type="button"
            className="w-full hover:scale-105 transition-transform py-3 mt-4 border border-slate-500 uppercase text-slate-500  font-medium flex items-center bg-white rounded-full justify-center"
          >
           
            Continue with Phone number
          </button>
          <div className="relative w-full flex justify-center mt-8 mb-2 items-center">
            <p className="bg-slate-400 h-[0.05rem] w-full "></p>
            <span className="mx-4 font-book absolute flex justify-center items-center text-slate-400 bg-white  w-14 h-6">
              OR
            </span>
          </div>
        </div>

        <div className="w-full  sm:px-8 px-3 flex flex-col items-center">
          <div className="w-full  font-bold flex flex-col">
            <label className="text-sm" htmlFor="email">
            Email address or username
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address or username."
              className="font-book outline-none rounded-md border pl-4 py-3 border-slate-500 placeholder:text-slate-500 focus:border-2 transition-all mt-2 focus:border-black "
            />
          </div>

         

          <div className="w-full mt-4 font-bold flex flex-col">
            <label className="text-sm" htmlFor="password">
            Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password."
              className="font-book outline-none rounded-md border pl-4 py-3 border-slate-500 placeholder:text-slate-500 focus:border-2 transition-all mt-2 focus:border-black "
            />
          </div>

          <Link href="password-reset" className="text-md transition-colors font-book mt-4 underline text-dark hover:text-green-600 cursor-pointer w-full">
            Forgot your password?
            </Link>
         
        </div>

        <div className="w-full pt-8 pb-3  sm:px-8 px-3 flex flex-col items-center">
          <button
            type="submit"
            className="px-12 w-full text-md py-3 uppercase bg-hover text-dark rounded-full hover:scale-105 transition-transform font-bold"
          >
            log in
          </button>
        </div>

        <div className="w-full font-book pt-4 px-8 pb-16  flex flex-col items-center">

        <p className="bg-slate-400 h-[0.05rem] w-full "></p>

        <h1 className='text-xl font-bold mt-6' >Don&apos;t have an account?</h1>

        <Link
            href="/signup"
            className="w-full hover:scale-105 transition-transform py-3 mt-6 border border-slate-500 uppercase text-slate-500  font-medium flex items-center bg-white rounded-full justify-center"
          >
           
            Signup for spotify
          </Link>
          
        </div>


      </form>
    </div>
  )
}

export default login