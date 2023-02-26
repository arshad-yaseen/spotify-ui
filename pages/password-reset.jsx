import React, { useEffect } from "react";
import SpotifyBlackLogo from "../images/logos/Spotify_Logo_RGB_Black.png";
import Image from "next/image";
import SpotifyBlackIcon from "../images/icons/Spotify_Icon_RGB_Black.png";
import Head from "next/head";

function passwordreset() {

  useEffect(() => {
    document.getElementById("player_section").style.display = "none";
  }, []);

  return (
    <div className="w-full h-full sm:px-8 px-3 flex flex-col items-center">
      <Head>
        <title>Reset your password</title>
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
        <h1 className="font-black  text-4xl tracking-tighter text-center text-dark">
          Password Reset
        </h1>

        <p className="text-center px-5 font-book mt-4 ">
          Enter your <strong className="font-bold">Spotify username,</strong> or
          the <strong className="font-bold">email address</strong> that you used
          to register. We&apos;ll send you an email with your username and a link to
          reset your password.
        </p>

        <div className="w-full mt-8  sm:px-8 px-3 flex flex-col items-center">
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
        </div>

        <div className="w-full pt-8 pb-3  sm:px-8 px-3 flex flex-col items-center">
          <button
            type="submit"
            className="px-12 text-sm py-3  bg-hover text-dark rounded-full hover:scale-105 transition-transform font-bold"
          >
            Send
          </button>

          <p className="font-book mt-6 ">
            If you still need help, contact{" "}
            <span className="underline hover:text-green-500 cursor-pointer transition-colors font-book">
              Spotify Support
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default passwordreset;
