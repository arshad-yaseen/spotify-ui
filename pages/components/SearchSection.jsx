import Image from "next/image";
import React, { useEffect } from "react";
import { changeHeaderBackgroundColor } from "../../lib/tools";
import DummyMusicThumb2 from "../../images/commonimages/dummymusicthumb2.jpeg";

function SearchSection() {
  useEffect(() => {
    changeHeaderBackgroundColor("#000", 20);
  }, []);

  let colors = [
    "red",
    "orange",
    "green",
    "teal",
    "blue",
    "indigo",
    "purple",
    "pink",
    "rose",
    "fuchsia",
    "purple",
    "violet",
    "indigo",
    "blue",
    "sky",
  ];

  let genreData = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1,
  ];

  return (
    <div className="w-full h-[420vh]  mt-28 pl-10">
      <div className="w-full">
        <h1 className="font-bold text-2xl text-white">Browse all</h1>
      </div>
      <div className="w-full flex flex-wrap h-full ">
        {genreData.map((data, index) => {
          let newColors = [...colors, ...colors, ...colors, ...colors];
          return (
            <div
              key={index + 16}
              style={{ backgroundColor: newColors[index] }}
              className={`w-[17.6%] h-52 relative overflow-hidden  rounded-lg mt-6 mr-6 pl-4`}
            >
              <h1 className="text-2xl mt-4 font-bold text-white">Podcasts</h1>
              <Image
                src={DummyMusicThumb2}
                alt="dummy music thumb"
                priority={true}
                className="h-24 genre-image absolute w-fit right-[-10%] bottom-[-2%] "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchSection;
